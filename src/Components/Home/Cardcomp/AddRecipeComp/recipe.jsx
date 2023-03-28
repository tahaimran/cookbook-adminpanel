import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../AddRecipeComp/recipe.css';

export const recipe = () => {
  return (
    <div className='maindiv'>
        <form>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='inputbox'
    >
      <div className='inputdiv'>
        <label>Recipe Name*</label>
        <TextField
          required
          id="outlined-multiline-flexible"
          label="Recipe Name"
          multiline
          maxRows={3}
        />

        <label>Ingredients*</label>
        <TextField
          required
          id="outlined-multiline-flexible"
          label="Ingredients"
          multiline
          maxRows={20}
        />

      </div>
    </Box>

    </form>

    </div>
  );
}