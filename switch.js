const color = 'yellow';
if (color === 'green'){
    console.log(' you are my green frnd');
}
else if (color ==='blue'){
    console.log('you r my blue frnd');
}
else if (color ==='red'){
    console.log('you r my red frnd');
}
else if (color ==='yellow'){
    console.log('you r my yellow frnd');
}
else if (color ==='white'){
    console.log('you r my white frnd');
}
else{
    console.log('you r my black frnd');
}

// alternative
switch(color){
    case 'green':
        console.log(' you are my green frnd');
        break;
    case 'blue':
        console.log(' you are my blue frnd');
        break;
    case 'white':
        console.log(' you are my white frnd');
        break;
    case 'black':
        console.log(' you are my black frnd');
        break;    
    default:
        console.log(' you are not my frnd');
}