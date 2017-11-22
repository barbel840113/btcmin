export interface ProfileModel {
    role: string[];
    sub: string | null;
    jti: string | null;
    useage: string | null;
    at_hash: string | null;
    nbf: number | null;
    exp: number | null;
    iat: number | null;
    iss: string | null;
    email: string | null;
    unique_name: string | null;
  //  name: string ;
    email_confirmed: boolean | null;
   
}