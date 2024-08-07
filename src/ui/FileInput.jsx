// import styled from 'styled-components';

// const FileInput = styled.input.attrs({ type: 'file' })`
//   font-size: 1.4rem;
//   border-radius: var(--border-radius-sm);

//   &::file-selector-button {
//     font: inherit;
//     font-weight: 500;
//     padding: 0.8rem 1.2rem;
//     margin-right: 1.2rem;
//     border-radius: var(--border-radius-sm);
//     border: none;
//     color: var(--color-brand-50);
//     background-color: var(--color-brand-600);
//     cursor: pointer;
//     transition: color 0.2s, background-color 0.2s;

//     &:hover {
//       background-color: var(--color-brand-700);
//     }
//   }
// `;

// export default FileInput;

import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const FileInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 80%;

  input[type='file'] {
    display: none;
  }

  .file-name {
    border: 1px solid var(--color-brand-300);
    padding: 0.8rem 1.2rem;
    border-radius: var(--border-radius-sm);
    width: 70%;
  }

  button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    /* color: var(--color-brand-50); */
    /* background-color: var(--color-brand-600); */
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    /* &:hover {
      background-color: var(--color-brand-700);
    } */
  }
`;

const FileInput = ({ accept }) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <FileInputWrapper>
      <input
        type="file"
        accept={accept}
        id="file-input"
        onChange={handleFileChange}
      />

      <Button
        variation="primary"
        size="large"
        onClick={() => document.getElementById('file-input').click()}
      >
        Choose File
      </Button>
      <input
        type="text"
        value={fileName}
        readOnly
        placeholder="No file chosen"
        className="file-name"
      />
    </FileInputWrapper>
  );
};

export default FileInput;
