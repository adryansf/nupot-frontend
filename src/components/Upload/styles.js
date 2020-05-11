import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  height: 150px;
  border: 1px dashed #222;
  border-radius: 4px;
  background-color: #ccc;
  background-image: url(${props => props.preview});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  cursor: pointer;
  transition: height 0.2s ease;
  text-align: center;
  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
  default: '#666',
  error: '#e57878',
  success: '#78e5d5',
};

export const UploadMessage = styled.p`
  display: block;
  text-align: center;
  color: ${props => messageColors[props.type || 'default']};
  padding: 15px 0;
`;
