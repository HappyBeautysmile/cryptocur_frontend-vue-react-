import React, { useEffect, useState } from 'react';

import {
  Container,
  Button,
} from '@material-ui/core';

import { useDropzone } from 'react-dropzone';
import { connect } from 'react-redux';

import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import CheckIcon from '@material-ui/icons/Check';


function AvatarImage() {
  const [files, setFiles] = useState([]);
  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
    getRootProps,
    getInputProps
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map((file) => (
    <div
      key={file.name}
      className="rounded-circle avatar-image overflow-hidden d-140 bg-neutral-success text-center font-weight-bold text-success d-flex justify-content-center align-items-center">
      <img
        className="img-fluid img-fit-container rounded-sm"
        src={file.preview}
        alt="..."
      />
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <Container className="pt-4">
          <div
              {...getRootProps({
                className: 'dropzone-upload-wrapper  d-flex align-items-center justify-content-center flex-wrap'
              })}>
              <input {...getInputProps()} />
              <div className="dropzone-inner-wrapper d-140 rounded-circle dropzone-avatar">
                <div className="avatar-icon-wrapper d-140 rounded-circle m-2">
                  <Button
                    onClick={open}
                    className="btn-first avatar-button badge shadow-sm-dark btn-icon badge-position badge-position--bottom-right border-0 text-indent-0 d-40 badge-circle badge-first text-white">
                    <PublishTwoToneIcon className="d-20" />
                  </Button>

                  <div>
                    {isDragAccept && (
                      <div className="rounded-circle overflow-hidden d-140 bg-success text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                        <CheckIcon className="d-40" />
                      </div>
                    )}
                    {isDragReject && (
                      <div className="rounded-circle overflow-hidden d-140 bg-danger text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                        <CloseTwoToneIcon className="d-60" />
                      </div>
                    )}
                    {!isDragActive && (
                      <div className="rounded-circle overflow-hidden d-140 bg-second text-center font-weight-bold text-white-50 d-flex justify-content-center align-items-center">
                        <AccountCircleTwoToneIcon className="d-50" />
                      </div>
                    )}
                  </div>
                  {thumbs.length > 0 && <div>{thumbs}</div>}
                </div>
              </div>
            </div>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarImage)