
interface Intern {
    name: string;
    age: number;
    skills: string[];
  }
  
  interface Junior {
    name: string;
    age: number;
    skills: string[];
    date_of_promotion: string; 
    domain: DomainType;
  }
  
  enum DomainType {
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend",
  }
  
  interface Company {
    Interns: Intern[];
    Juniors: Junior[];
    Country: string; 
  }
  
  export default Co