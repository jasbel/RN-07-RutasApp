import Geolocation from '@react-native-community/geolocation';
import React from 'react';
import { useEffect, useState, useRef } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

const useLocation = () => {
  const [hasLocation, setHasLocation] = useState(false);

  const [routeLines, setRouteLines] = useState<Location[]>([])

  const [initialPosition, setInitialPosition] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });
  const [userLocation, setUserLocation] = useState<Location>({
    longitude: 0,
    latitude: 0,
  })
  const watchId = useRef<number>();
  const isMounted = useRef(true);

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        err => reject({err}),
        {
          enableHighAccuracy: true,
        },
      );
    });
  };

  const followUserLocation = () => {
    watchId.current = Geolocation.watchPosition(
      ({coords}) => {
        const {latitude, longitude} = coords;

        if (!isMounted.current) return;

        setUserLocation({ latitude, longitude })
        setRouteLines(routes =>[...routes, {latitude, longitude}])
      },
      err => console.log(err),
      {enableHighAccuracy: true, distanceFilter: 10},
    );

  };

  const stopFollowUserLocation = () => {
    watchId.current &&
    Geolocation.clearWatch(watchId.current)
  }

  useEffect(()=>{
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {
    getCurrentLocation().then(location => {
      if (!isMounted.current) return;

      setInitialPosition(location);
      setUserLocation(location);
      setRouteLines(routes => [...routes, location])
      setHasLocation(true);
    });
  }, []);

  return {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
    routeLines,
  };
};

export default useLocation;
