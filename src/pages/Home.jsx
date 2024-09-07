import { useState } from "react";
import { Box } from "@mui/material";

import HeroBaner from "../components/HeroBaner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";



export default function Home() {
    return (
        <Box>
            <HeroBaner />
            <SearchExercises />
            <Exercises />
        </Box>
    );
}