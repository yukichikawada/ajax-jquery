class FollowToggle {
  constructor(button) {
    this.$button = $(button);
    this.userId = this.$button.data('user-id');
    this.followState = this.$button.data('initial-follow-state');

    this.$button.on('click', (e) => this.handleClick(e));

    this.render();
  }

  render() {
    if (this.followState) {
      this.$button.text("Unfollow");
    } else {
      this.$button.text("Follow");
    }
    this.$button.prop('disabled', false);
  }

  async handleClick(e) {
    const method = this.followState ? 'DELETE' : 'POST';

    e.preventDefault();
    console.log(`${this.userId}`);

    this.$button.prop('disabled', true);
    await $.ajax({
      url: `/users/${this.userId}/follow`,
      method: method,
      dataType: 'JSON'
    });

    this.followState = !this.followState;

    this.render();
  }
}

module.exports = FollowToggle;
