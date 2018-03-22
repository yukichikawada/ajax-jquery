class UsersSearch {
  constructor(search) {
    this.$search = $(search);

    this.value = this.$search.val();
    // debugger;
    console.log(this.value);
  }
}


module.exports = UsersSearch;
