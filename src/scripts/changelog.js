const { writeFileSync, readFileSync } = require("fs");
const { exit, argv } = require("process");
const { simpleGit } = require("simple-git");

const args = argv.slice(2);
const repoUrl = "https://github.com/bhaireshm/ez.js";
const options = {
  baseDir: process.cwd(),
  binary: "git",
  maxConcurrentProcesses: 6,
  trimmed: false,
};

(async function release() {
  const git = simpleGit(options);
  const [version, message] = args;
  const versionPattern = /^v?d+(\.d+){2}(-[a-z]+\.\d+)?$/;

  if (versionPattern.test(version)) {
    console.error("A valid version must be provided as the first argument.");
    exit(1);
  }

  const latestTag = (await git.tags({})).latest;

  // * Find all commits between the HEAD on $defaultBranch and the latest tag on $defaultBranch
  let allCommits = (await git.log({ from: "HEAD", to: latestTag, format: "(%h) %B %n", multiLine: true, mailMap: true })).all;
  allCommits = _getUniqueArray(allCommits);

  const commits = [];
  const features = [];
  allCommits.forEach(commit => {
    const msg = String(commit.message).toLowerCase();
    if (!msg.startsWith("merge") && !msg.startsWith("feat") && !msg.startsWith("release"))
      commits.push(_formatMessage(commit));
    if (msg.startsWith("feat")) features.push(_formatMessage(commit));
  });

  const today = new Date().toLocaleString().replace(/\//g, "-").replace(/[A-Z]/g, "").trim();
  const changelogFilePath = `${options.baseDir}/CHANGELOG.md`;
  let changelog = readFileSync(changelogFilePath, "utf8");
  changelog = `## v${version} (${today})\n${message ? `${message}\n` : ""}\n${features.length ? `### ✨ Features\n${features.join("")}\n` : ""}### 📃 Commits\n${commits.join("")}\n${changelog}`;

  // * Inject the current release version and date into the CHANGELOG file
  writeFileSync(changelogFilePath, changelog, "utf8");

  console.log("Changelog updated.");
})();

// * Private functions
function _getUniqueArray(arr = []) {
  const uArr = [];
  arr?.forEach((a) => { if (uArr.indexOf(a) === -1) uArr.push(a); });
  return uArr;
}

function _formatMessage(commit = {}) {
  const { hash, body } = commit;
  const hashLink = `${repoUrl}/commit/${hash}`;
  return `- [${String(hash).substring(0, 7)}](${hashLink}) ${body.replace(/- /g, "  - ")}`;
}
