import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MyCard = ({ idTranscript, versionId, sendClaim }) => {
    const [claim, setClaim] = useState({
      title: '',
      text: '',
    });

const handleChange = (event) => {
    const { name, value } = event.target;
    setClaim((prevClaim) => ({
      ...prevClaim,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendClaim(claim);
    setClaim({
      title: '',
      text: '',
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ID: {id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Transcript: {idTranscript}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Version ID: {versionId}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            label="Titre"
            value={claim.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="text"
            label="Texte"
            value={claim.text}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Envoyer
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MyCard;