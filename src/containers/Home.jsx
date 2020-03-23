import React from 'react';
import { connect } from 'react-redux';
import { cleanFilter } from '../actions';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals, filter, cleanFilter }) => {
  return (
    <>
      <Search isHome />
      {filter.length > 0 && (
        <Categories title='Búsqueda'>
          <button className='button' onClick={() => cleanFilter()}> Cerrar </button>
          <Carousel>
            {filter.map(item => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}
      {myList.length > 0 && ( //Se valida si myList esta vacio o no.
        <Categories title='Mi Lista'>
          <Carousel>
            {myList.map(item => <CarouselItem key={item.id} {...item} favorite />)}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  cleanFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
