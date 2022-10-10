import { useState, useEffect } from 'react'
import { Layer, Text, Transformer } from 'react-konva'

export default function EditableText() {

	let [text, setText] = useState({
		text: 'Altere esse texto',
		x: 0,
		y: 0,
		fontSize: 20,
		isDraggable: true,
		fill: 'black'
	})

	return(
		<Text
			text={text.text}
			x={text.x}
			y={text.y}
			draggable={text.isDraggable}
			fill={text.fill}
		/>
	)
}