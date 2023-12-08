import React, { useState, useContext } from 'react';
import { Button, Stack } from 'react-bootstrap';

export default function QuizStartFrame(){
    return (
        <Stack>        
            <Button>Lätt</Button>
            <Button>Svår</Button>            
        </Stack>
    )
}