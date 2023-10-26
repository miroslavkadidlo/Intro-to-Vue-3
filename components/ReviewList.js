app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template: 
  /*html*/
  `
  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gaves this {{ review.rating }} stars
        <br/>
        "{{ review.review }}"
        <p>{{ review.recommend }}</p>
      </li>
    </ul>

  </div>
  `,
  data() {
    return {
        name: '',
        review: '',
        rating: null,
        recommend: ''
    }
  }
})