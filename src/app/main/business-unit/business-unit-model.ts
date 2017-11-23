

export class BusinessUnit{

  private businessUnitName : string;
  private main_street : string;

  /**
   * Get Business Unit Name
   */
  get BusinessUnitName () {
     return this.businessUnitName;
  };

  /**
   * Set Business Unit Name
   */
  set BusinessUnitName(value)
  {
    try{
      this.businessUnitName = value;
    }
    catch(error)
    {
        console.log(error);
        this.businessUnitName = '';
    }
  };

  /**
   *  Get Main STreet
   */
  get MainStreet(){
    return this.main_street; 
  }

  /**
   * Set Main Street
   */
  set MainStreet(value)
  {
    try{
       this.main_street = value;
    }
    catch(error)
    {
       console.log(error);
       this.main_street = '';
    }
  }
}