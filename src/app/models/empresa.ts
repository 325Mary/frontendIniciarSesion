export class Company{
    public  nameCompany: string;
    public telephone: string;
    public tenantId:string;
    public email: string;
    public direction:string;
    public pdfRunt: string 
 
     constructor( nameCompany: string, telephone: string, tenantId:string, email: string, direction:string, pdfRunt: string ){
         this.nameCompany =nameCompany,
         this.telephone = telephone,
         this.tenantId =tenantId,
         this.email = email,
         this.direction = direction,
         this.pdfRunt = pdfRunt
     }
 }