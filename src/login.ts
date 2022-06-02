class Role{
  private role = '';



  get(){
    return this.role;
  }

  set(role: string){
    this.role = role;
  }
}

const role = new Role();

export default role;