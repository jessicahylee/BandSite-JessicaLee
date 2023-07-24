// const commentsArray = [
//   {
//     name: 'Connor Walton',
//     comment:
//       'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
//     date: '02/17/2021',
//   },
//   {
//     name: 'Emilie Beach',
//     comment:
//       'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
//     date: '01/09/2021',
//   },
//   {
//     name: 'Miles Acosta',
//     comment:
//       "I can't stop listening. Every time I hear one of their songs- the vocals- it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough",
//     date: '12/20/2020',
//   },
// ]

// Create a post:
let form = document.getElementById('my-form')
form.addEventListener('submit', function (e) {
  e.preventDefault()

  createPost()
  // e.preventDefault() //prevents reload the page
})

const createPost = () => {
  console.log('createPost')
  const inputs = document.getElementById('my-form').elements
  const inputByName = inputs['username']
  console.log(inputByName)
  const inputByComment = inputs['comment']
  console.log(inputByComment)

  let commentsDiv = document.createElement('div') // container__comments
  commentsDiv.classList.add('container__comments')
  // commentsDiv.innerText = inputByName.value

  let containerCommentsDiv = document.createElement('div') // container__comments--div
  containerCommentsDiv.classList.add('container__comments--div')

  let containerCommentsNameDiv = document.createElement('div') // container__comments--name
  containerCommentsNameDiv.classList.add('container__comments--name')

  let ccommentsNameH3 = document.createElement('h3') // comments-name
  ccommentsNameH3.classList.add('comments-name')
  ccommentsNameH3.innerText = inputByName.value

  containerCommentsNameDiv.appendChild(ccommentsNameH3)

  let containerCommentsDateDiv = document.createElement('div') // container__comments--date
  containerCommentsDateDiv.classList.add('container__comments--date')

  let dateDataPara = document.createElement('p') // data-data
  dateDataPara.classList.add('data-data')
  dateDataPara.innerText = new Date()
  containerCommentsDateDiv.appendChild(dateDataPara)

  let containerCommentsCommentDiv = document.createElement('div') // container__comments--comment
  containerCommentsCommentDiv.classList.add('container__comments--comment')

  let comentsPara = document.createElement('p') // data-data
  comentsPara.innerText = inputByComment.value
  containerCommentsCommentDiv.appendChild(comentsPara)

  let solidLine = document.createElement('hr') // container__comments--comment
  solidLine.classList.add('solid')

  containerCommentsDiv.appendChild(containerCommentsNameDiv)
  containerCommentsDiv.appendChild(containerCommentsDateDiv)
  commentsDiv.appendChild(containerCommentsDiv)
  commentsDiv.appendChild(containerCommentsCommentDiv)

  // Append to the container container__comments-block
  let parent = document.querySelector('.container__comments-block')
  parent.appendChild(commentsDiv)
  parent.appendChild(solidLine)
}

const loadComments = (commentsArray) => {
  for (let i = 0; i <= commentsArray.length - 1; i++) {
    // console.log(shows[i]);
    // Create Elements
    let commentsDiv = document.createElement('div') // container__comments
    commentsDiv.classList.add('container__comments')
    // commentsDiv.innerText = commentsArray[0].name

    let containerCommentsDiv = document.createElement('div') // container__comments--div
    containerCommentsDiv.classList.add('container__comments--div')

    let containerCommentsNameDiv = document.createElement('div') // container__comments--name
    containerCommentsNameDiv.classList.add('container__comments--name')

    let ccommentsNameH3 = document.createElement('h3') // comments-name
    ccommentsNameH3.classList.add('comments-name')
    ccommentsNameH3.innerText = commentsArray[i].name

    containerCommentsNameDiv.appendChild(ccommentsNameH3)

    let containerCommentsDateDiv = document.createElement('div') // container__comments--date
    containerCommentsDateDiv.classList.add('container__comments--date')

    let dateDataPara = document.createElement('p') // data-data
    dateDataPara.classList.add('data-data')
    dateDataPara.innerText = commentsArray[i].date
    containerCommentsDateDiv.appendChild(dateDataPara)

    let containerCommentsCommentDiv = document.createElement('div') // container__comments--comment
    containerCommentsCommentDiv.classList.add('container__comments--comment')

    let comentsPara = document.createElement('p') // data-data
    comentsPara.innerText = commentsArray[i].comment
    containerCommentsCommentDiv.appendChild(comentsPara)

    let solidLine = document.createElement('hr') // container__comments--comment
    solidLine.classList.add('solid')

    containerCommentsDiv.appendChild(containerCommentsNameDiv)
    containerCommentsDiv.appendChild(containerCommentsDateDiv)
    commentsDiv.appendChild(containerCommentsDiv)
    commentsDiv.appendChild(containerCommentsCommentDiv)

    // Append to the container container__comments-block
    let parent = document.querySelector('.container__comments-block')
    parent.appendChild(commentsDiv)
    parent.appendChild(solidLine)
  }
}

// loadComments()

const getcomments = () =>
  axios
    .get(
      'https://project-1-api.herokuapp.com/comments?api_key=73698041-868b-44dd-b05e-02564d21a37c',
    )
    .then((result) => {
      console.log(result)
      loadComments(result.data)
    })

    .catch((error) => {
      console.log('Error feching data', error)
    })
getcomments()
