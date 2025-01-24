// const inputObject = {
//   id: [],
//   sdid: "",
//   qwr: undefined,
//   disableCrud: 0,
//   nested: {
//     prop1: "",
//     prop2: {
//       subProp1: null,
//       subProp2: "value",
//     },
//   },
//   arrayProp: [
//     {
//       subProp: "",
//     },
//     {
//       subProp: "value",
//     },
//   ],
// };

// const projectJSON = {
//   $schema: "https://brikcase.s3.amazonaws.com/apf/project.schema.json",
//   template: {
//     id: "",
//     name: "",
//     category: "",
//     description: "",
//   },
//   pages: [
//     {
//       pageName: "Home",
//       pageData: [
//         {
//           type: "grid",
//           style: {},
//           cols: [
//             {
//               colspan: "12",
//               style: {},
//               colData: [
//                 {
//                   type: "unset",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
//   config: {
//     theme: {},
//     redux: {},
//   },
// };

// Example of schema - based formatting:

// const userSchema = {
//   id: "userId",
//   name: "personalInfo.fullName",
//   email: "contactDetails.emailAddress",
//   age: "personalInfo.age",
//   "address.street": "location.streetAddress",
//   "address.city": "location.city",
//   "address.country": "location.country"
// };

// const userData = {
//   userId: "12345",
//   personalInfo: {
//     fullName: "John Doe",
//     age: 30
//   },
//   contactDetails: {
//     emailAddress: "john.doe@example.com",
//     phone: "+1234567890"
//   },
//   location: {
//     streetAddress: "123 Main St",
//     city: "Anytown",
//     country: "USA"
//   }
// };
// const formattedUser = dataFormatter(userData, userSchema);
// console.log(formattedUser);

// const payload = {
//   id: "some-id",
//   data: {
//     theme: "dark",
//   },
//   portion: {
//     id: "portion-id",
//     data: {
//       name: "section-wrapper",
//     },
//   },
// };

// const result = dataFormatter(
//   payload,
//   "pid:id,theme:data.theme,prtn.id:portion.id,prtn.name:portion.data.name,something:block",
// );
// console.log(result);

// Output:
// {
//   id: "12345",
//   name: "John Doe",
//   email: "john.doe@example.com",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     country: "USA"
//   }
// }

// const result = mergeObjects({ template: { name: "test" } }, projectJSON);
// console.log("result", result);

import { dateDiff } from "../../dist/src";
// import { chmod } from "fs";

// type NewType<T> = {
//   a: string;
//   b: T
// };

// const promise = toPromise<NewType<boolean>>(chmod);

// promise('typedoc.json', 0o775)
//   .then((res) => {
//     console.log('The permissions for file "my_file.txt" have been changed!', res.b);
//   })
//   .catch(console.error);

console.time("test");
// const arr = [1, 3, 5, 7, 9, 3, 2, 5, 7, 8, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(getUniqueArray(arr));

const result = dateDiff(new Date("12/12/2012 12:00:00"), new Date("12/12/2012 13:45:00"));
console.log("file: dateDiff.test.ts:45  result", result);

console.timeEnd("test");

// console.time("test2");
// console.log(Array.from(new Set(arr)));
// console.timeEnd("test2");
