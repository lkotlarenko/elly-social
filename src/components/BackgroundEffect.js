import React, { useMemo } from "react"
import "../styles/global.css"

const randomPosition = usedPositions => {
  let position
  let attempts = 0

  do {
    const top = `${Math.floor(Math.random() * -100) + 55}%`
    const left = `${Math.floor(Math.random() * -100) + 55}%`
    position = { top, left }
    attempts++
  } while (
    attempts < 10 &&
    usedPositions.some(
      pos =>
        Math.abs(parseInt(pos.top) - parseInt(position.top)) < 20 &&
        Math.abs(parseInt(pos.left) - parseInt(position.left)) < 20
    )
  )

  usedPositions.push(position)
  return position
}

const BackgroundEffect = () => {
  const numberOfItems = 10

  const positions = useMemo(() => {
    const usedPositions = []
    const items = []

    for (let i = 0; i < numberOfItems * 3; i++) {
      items.push(randomPosition(usedPositions))
    }
    return items
  }, [numberOfItems])

  const generateItems = (className, imageUrl, startIndex) => {
    return positions
      .slice(startIndex, startIndex + numberOfItems)
      .map((position, index) => {
        const randomAnimation = `floatAround${
          Math.floor(Math.random() * 6) + 1
        }`
        const randomDelay = `${Math.random() * 8}s`
        return (
          <div
            className={className}
            key={`${className}-${index}`}
            style={{
              ...position,
              opacity: 0,
              animation: `${randomAnimation} 5s linear ${randomDelay} infinite forwards`,
            }}
          >
            <img
              className="floating-image"
              src={imageUrl}
              alt={className}
              loading="lazy"
            />
          </div>
        )
      })
  }

  return (
    <>
      {generateItems(
        "carrot",
        "https://i.imgur.com/285OR45.png",
        numberOfItems
      )}
      {generateItems(
        "cloud",
        "https://i.imgur.com/R6vca9g.png",
        numberOfItems * 2
      )}
      {generateItems("bunny", "https://i.imgur.com/593WzwM.png", 0)}
    </>
  )
}

export default BackgroundEffect
