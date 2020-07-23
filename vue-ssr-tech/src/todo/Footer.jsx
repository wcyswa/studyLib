import '../assets/styles/footer.styl'
export default {
    data(){
      return{
          author:'swallow'
      }
    },
    render(){
        return(
            <div class='footer'>
                writeBy {this.author}
            </div>
        )
    }
}