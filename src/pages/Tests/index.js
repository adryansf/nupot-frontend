import React from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Dish from '~/components/Dish';

export default function Tests() {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Desenvolvimento de componentes</h1>
      <Dish
        price={20}
        name="Masquerito"
        description="Um belo prato"
        image="https://www.mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg"
      >
        <Button color="default" startIcon={<CloudUploadIcon />}>
          Upload
        </Button>
      </Dish>
    </div>
  );
}
