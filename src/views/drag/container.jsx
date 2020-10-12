import React from 'react'
import CardItem from './cardItem'

const cardList = [
    {
        title: "第一个卡片",
        id: 1,
        content: "这是第一个卡片"
    },
    {
        title: "第二个卡片",
        id: 2,
        content: "这是第二个卡片"
    },
    {
        title: "第三个卡片",
        id: 3,
        content: "这是第三个卡片"
    }
]

export default function Drag() {
    return (
        <div className="cardList" style={{
            display: "flex",
            padding: "10px"
        }}>
            {
                cardList.map((item) => {
                    return (
                        <CardItem
                            key={item.id}
                            title={item.title}
                            content={item.content}
                        />
                    )
                })
            }
        </div>
    )
}