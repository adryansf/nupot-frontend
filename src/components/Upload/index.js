import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <UploadMessage>Coloque uma foto do seu prato aqui...</UploadMessage>
      );
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte a foto aqui</UploadMessage>;
  };

  render() {
    const { onDrop, preview } = this.props;
    return (
      <Dropzone accept="image/*" onDropAccepted={onDrop} multiple={false}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
            preview={preview}
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
            <CloudUploadIcon style={{ width: '50px', height: '50px' }} />
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
