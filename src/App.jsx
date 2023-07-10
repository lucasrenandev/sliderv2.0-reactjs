import images from './images'
import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  let [currentSlide] = useState(0)

  const slideShow = () => {
    const image = document.getElementById("image")
    const item = images[currentSlide]
    image.src = item.img
  }
  useEffect(() => {
    slideShow()
  }, [])

  const nextSlide = () => {
    currentSlide++
    if(currentSlide > images.length - 1) {
      currentSlide = 0
    }
    slideIndicator(currentSlide + 1)
    slideShow()
  }
  useEffect(() => {
    setInterval(nextSlide, 4500)
  }, [])

  const previousSlide = () => {
    currentSlide--
    if(currentSlide < 0) {
      currentSlide = images.length - 1
    }
    slideIndicator(currentSlide + 1)
    slideShow()
  }

  const slideIndicator = (index) => {
    const buttons = document.querySelectorAll(".buttons button")
    buttons.forEach((button) => {
      button.style.backgroundColor = "transparent"
    })
    document.querySelector('.buttons button:nth-child(' + index + ')').style.backgroundColor = "#fff"
  }

  const navegationButton = (index) => {
    document.querySelector(".btn" + index)
    currentSlide = index - 1
    slideIndicator(index)
  }

  useEffect(() => {
    const buttons = document.querySelectorAll(".buttons button")
    buttons.forEach((button) => {
      button.addEventListener("click", function(e) {
        const indexValue = e.target.classList.value
        if(indexValue === "btn1") {
          navegationButton(1)
        }
        if(indexValue === "btn2") {
          navegationButton(2)
        }
        if(indexValue === "btn3") {
          navegationButton(3)
        }
        if(indexValue === "btn4") {
          navegationButton(4)
        }
        slideShow()
      })
    })
  },[])

  return (
    <>
      <section className='container'>
        <div className="left-arrow" onClick={previousSlide}>
          <i className="bx bx-left-arrow-alt"></i>
        </div>{/*End left arrow*/}
        <img src="" id="image" alt="Imagem 1" />
        <div className="buttons">
          <button className='btn1' type='button'></button>
          <button className='btn2' type='button'></button>
          <button className='btn3' type='button'></button>
          <button className='btn4' type='button'></button>
        </div>{/*End buttons*/}
        <div className="right-arrow" onClick={nextSlide}>
          <i className="bx bx-right-arrow-alt"></i>
        </div>{/*End right arrow*/}
      </section>{/*End container*/}
    </>
  )
}