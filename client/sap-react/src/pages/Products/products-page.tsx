import { useEffect, useState } from 'react';
import agent from '../../api/agent';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './product-style.css';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/configureStore';

interface Product {
  name: string;
  imageData: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const selector = useAppSelector((store) => store.account);
  const user = selector.user;

  useEffect(() => {
    if (user) {
      agent.Products.getAllProducts()
        .then((items: Product[]) => {
          setProducts(items);
          console.log(items);
        })
        .catch((error: Error) => console.log(error));
    } else {
      console.log('greska');
    }
  }, [user]);

  return (
    <div className='cardsContainer'>
      {user
        ? products.map((item: Product) => (
            <Card sx={{ maxWidth: 400, minWidth: 300 }} key={item.name}>
              <CardMedia
                src={item.imageData}
                component='img'
                alt='product image'
                height='140'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {item.name}
                </Typography>
              </CardContent>
              <CardActions>

                <Link to="/class">
                  <Button
                    disabled={selector.user?.roles?.includes("Member")}
                    size="small"
                  >
                    Počni čas
                  </Button>
                </Link>
                <Link to="/forum">
                  <Button size="small">Forum</Button>
                </Link>
                <Link to="/enroll">
                  <Button
                    disabled={selector.user?.roles?.includes("Admin")}
                    size="small"
                  >
                    Priključi se
                  </Button>

                </Link>
              </CardActions>
            </Card>
          ))
        : null}
    </div>
  );
}
