import { useState } from "react";
import { Box } from "@mui/material";

import HeroBaner from "../components/HeroBaner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";



export default function Home() {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);

    return (
        <Box>
            <HeroBaner />
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Exercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
        </Box>
    );
}