import { Delivery, School } from "./common";
// TODO: Create a type for program ids, which should be strings
type ProgramID = string;
// TODO: Create a type for credential types, which can either be "Diploma", "Degree", or "Certificate"
type credential = "Diploma" | "Degree" | "Certificate"

// TODO: Create an interface for programs
// The interface should include the following properties:
// an id (hint: use the ProgramId type created above)
// a name
// a credential (hint: use the Credential type created above)
// a school (hint: use the School type from common.ts)
// a length in years
// a number of credits
// an optional delivery method (hint: use the Delivery type from common.ts)
// an optional array of career paths
// an optional note

export interface Program {
  ID: ProgramID;
  name: string;
  credential: credential;
  school: School;
  length: string;
  credit: number;
  method: Delivery;
  careerPath?: string[];
  note: string;
}
