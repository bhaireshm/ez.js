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

import { DateFormatter } from "../date";
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

console.log(new DateFormatter("2021-11-16 21:35:48").format()); // "2021-11-16 21:35:48"
console.log(new DateFormatter("2021-11-16 21:35:48").format("dd/MM/yyyy")); // "16/11/2021"
console.log(new DateFormatter("2021-11-16 21:35:48").format("yyyy-MM-dd")); // "2021-11-16"
console.log(new DateFormatter("2021-11-16 21:35:48").format("HH:mm:ss")); // "21:35:48"
console.log(new DateFormatter("2021-11-16 21:35:48").format("hh:mm tt")); // "09:35 PM"

console.timeEnd("test");
