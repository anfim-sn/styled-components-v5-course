import styled from 'styled-components'

const ToggleThemeWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto 0;
  display: flex;
  background: ${p => p.theme.primaryColor};
  cursor: pointer;
  );
`

const Notch = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  transition: transform 0.1s linear;
  transform: translate(${p => (p.isActive ? '26px' : '1px')});
`

export const ToggleTheme = ({ isActive = false, onToggle }) => {
  return (
    <ToggleThemeWrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleThemeWrapper>
  )
}
