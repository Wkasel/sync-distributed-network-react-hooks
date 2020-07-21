import React from "react";
import Typography from "@material-ui/core/Typography";
import { usePosition } from "use-position";

export const SyncGeoModule: React.FunctionComponent = () => {
  const watch = true;
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(
    watch,
    { enableHighAccuracy: false }
  );

  const loader =
    !latitude && !error ? (
      <>
        <div>Trying to fetch location...</div>
        <br />
      </>
    ) : null;

  return (
    <>
      <Typography variant="h5">GeoLocation</Typography>
      <hr />
      {loader}
      <code>
        latitude: {latitude}
        <br />
        longitude: {longitude}
        <br />
        timestamp: {timestamp}
        <br />
        accuracy: {accuracy && `${accuracy}m`}
        <br />
        error: {error}
      </code>
    </>
  );
};
