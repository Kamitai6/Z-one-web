import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card, 
    CardMedia, 
    CardActions, 
    CardContent, 
    CardHeader, 
    Button, 
    Typography, 
    Avatar, 
    IconButton 
} from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';


const useStyles = makeStyles({
    cHeader: {
        height: '50px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        "& .MuiCardHeader-content": {
            overflow: 'hidden'
        }
    },
    cContent: {
        height: '200px',
        overflow: 'hidden'
    }
});


function BodyCard(props) {
    const { id, title, body, avatarUrl, imageUrl } = props;
    const classes = useStyles();
    return (
        <Card variant="outlined">
            <CardHeader
                avatar={<Avatar src={avatarUrl} />}
                action={
                <IconButton aria-label="settings">
                    <StarBorderOutlinedIcon />
                </IconButton>
                }
                className={classes.cHeader}
                title={title}
            />
            <CardMedia style={{ height: "150px" }} image={imageUrl} />
            <CardContent className={classes.cContent}>
            <Typography variant="body2" component="p">
                {body}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" href={`/post/${id}`}>詳細をみる</Button>
            </CardActions>
        </Card>
    );
}

export default BodyCard
