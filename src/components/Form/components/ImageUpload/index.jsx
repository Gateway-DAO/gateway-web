import * as FormStyled from '../../style';
import * as Styled from './style';
import { useState, useRef, useEffect } from 'react';

export const RawImageUpload = ({ defaultImage, defaultImageURL, setImage: sendImage }) => {
    const [image, setImage] = useState(defaultImage || null);
    const [imageURL, setImageURL] = useState(defaultImageURL || null);
    const [over, setOver] = useState(null);
    const $input = useRef(null);

    useEffect(
        () => defaultImage && setImageURL(URL.createObjectURL(image)),
        []
    );

    useEffect(() => {
        sendImage(image);
    }, [image]);

    return (
        <>
            {!imageURL ? (
                <Styled.DragArea
                    hover={over}
                    htmlFor='uploadFile'
                    onClick={() => {
                        $input.current.click();
                    }}
                    onDrop={(e) => {
                        e.preventDefault();
                        e.persist();
                        if (
                            e.dataTransfer.files[0] &&
                            e.dataTransfer.files[0]['type'].split('/')[0] ===
                                'image'
                        ) {
                            setImage(e.dataTransfer.files[0]);
                            setImageURL(
                                URL.createObjectURL(e.dataTransfer.files[0])
                            );
                        }
                        setOver(false);
                    }}
                    onDragOver={(e) => {
                        e.preventDefault();
                        setOver(true);
                    }}
                    onDragLeave={(e) => {
                        e.preventDefault();
                        setOver(false);
                    }}
                >
                    <Styled.Header hover={over} className='header'>
                        <Styled.Span> Upload </Styled.Span>or Drag your image
                        here
                    </Styled.Header>
                    <input
                        type='file'
                        accept='image/*'
                        hidden
                        ref={$input}
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                            setImageURL(URL.createObjectURL(e.target.files[0]));
                        }}
                    ></input>
                </Styled.DragArea>
            ) : (
                <Styled.Background image={imageURL}>
                    <Styled.Cross
                        onClick={() => {
                            setImage(null);
                            setImageURL(null);
                        }}
                    >
                        +
                    </Styled.Cross>
                </Styled.Background>
            )}
        </>
    );
};

export const ImageUpload = ({ defaultImage = null, defaultImageURL = null, setImage, htmlFor, label }) => {
    return (
        <FormStyled.Fieldset>
            <FormStyled.Label htmlFor={htmlFor}>
                {label}
            </FormStyled.Label>
            <RawImageUpload defaultImage={defaultImage} defaultImageURL={defaultImageURL} setImage={setImage} />
        </FormStyled.Fieldset>
    );
};

export default ImageUpload;
