import styled from 'styled-components/macro'

export default function FoodPrintOMeter({ pointerPosition }) {
  return (
    <>
      <ColorBar>
        <Pointer position={pointerPosition} />
      </ColorBar>
    </>
  )
}

const ColorBar = styled.div`
  height: 14px;
  background: linear-gradient(
    90deg,
    var(--green) 0%,
    #ebda58 50%,
    var(--orange) 95%
  );
  border-radius: 41px;
  width: 92%;
  margin: 10px auto;
  position: relative;
`

const Pointer = styled.div`
  height: 18px;
  background-color: var(--dark-grey);
  width: 8px;
  border-radius: 20px;
  position: absolute;
  top: -2px;
  left: ${(props) => props.position}%;
`
