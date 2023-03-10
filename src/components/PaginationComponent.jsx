import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material';


export function PaginationComponent({ page, setPage, maxPages}) {

    const theme = useTheme();
    const primaryMain = theme.palette.primary.main;
    
    const handleChangePage = (event, value) =>{
        setPage(value)
    }
    
    return (
    <Stack 
        spacing={2}
        sx={{
            margin: 'auto',
            marginTop: '3rem',
        }}
    >
        <Pagination 
            siblingCount={0}
            count={maxPages}
            page={page}
            variant="outlined"
            size="large"
            onChange={handleChangePage} 
            sx={{
                '& .MuiPaginationItem-page.Mui-selected': {
                    backgroundColor: primaryMain,
                    color: "#fff",
                    fontWeight: 'bold',
                },
                '& .MuiPaginationItem-root:hover': {
                    color: "#fff",
                    fontWeight: 'bold',
                    backgroundColor: primaryMain,
                    
                }
            }}
        />
    </Stack>
    )
}
