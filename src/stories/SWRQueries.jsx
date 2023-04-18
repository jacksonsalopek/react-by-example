import React from 'react';
import PropTypes from 'prop-types'
import useSWR from "swr";
import { fetcher } from "../shared/fetcher";

export const SWRQueries = ({ requestUrl, ...props }) => {
  const [url, setUrl] = React.useState(requestUrl);
  const { data, error } = useSWR(url ? url : null, fetcher)

  React.useEffect(() => {
    setUrl(requestUrl)
  }, [requestUrl])

  return (
    <div>
      <h1>Queried Data:</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}

SWRQueries.propTypes = {
  requestUrl: PropTypes.string.isRequired,
};

SWRQueries.defaultProps = {
  requestUrl: 'https://cat-fact.herokuapp.com/facts/random'
};
