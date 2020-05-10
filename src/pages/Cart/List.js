import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useShop } from '../../contexts/ShopContext';

const useStyles = makeStyles({
  tableContainer: {
    background: 'rgba(255, 255, 255, 0.2)',
  },
  table: {
    minWidth: 650,
  },
  img: {
    maxHeight: '200px',
  },
});

export default props => {
  const classes = useStyles();
  const [shopState, dispatch] = useShop();

  const handleChange = (index, dish) => event => {
    event.preventDefault();
    dispatch({
      type: 'updateOne',
      payload: [index, { ...dish, quantity: event.target.value }],
    });
  };

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Prato</TableCell>
            <TableCell align="left">Preço</TableCell>
            <TableCell align="left">Ações</TableCell>
            <TableCell align="left">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shopState.map((dish, index) => (
            <TableRow key={dish.id}>
              <TableCell align="left">
                <img className={classes.img} src={dish.image} />
              </TableCell>
              <TableCell align="left">R${dish.price.toFixed(2)}</TableCell>
              <TableCell align="left">
                Quantidade{' '}
                <input
                  type="number"
                  min="0"
                  value={dish.quantity}
                  onChange={handleChange(index, dish)}
                />{' '}
                <button
                  onClick={() =>
                    dispatch({ type: 'removeById', payload: dish.id })
                  }
                >
                  Deletar
                </button>
              </TableCell>
              <TableCell align="left">
                R${(dish.quantity * dish.price).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
