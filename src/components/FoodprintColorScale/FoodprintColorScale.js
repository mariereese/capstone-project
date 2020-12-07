import styled from 'styled-components/macro'

export default function FoodprintColorScale({ pointerPosition }) {
  return (
    <ColorScale>
      <Pointer position={pointerPosition} />
    </ColorScale>
  )
}

const ColorScale = styled.div`
  margin: 10px auto;
  position: relative;
  width: 92%;
  height: 14px;
  border-radius: 41px;
  background: linear-gradient(
    90deg,
    var(--green) 0%,
    var(--yellow) 50%,
    var(--orange) 95%
  );
`

const Pointer = styled.div`
  height: 18px;
  width: 8px;
  position: absolute;
  top: -2px;
  left: ${(props) => props.position}%;
  border-radius: 20px;
  background-color: var(--dark-grey);
`
