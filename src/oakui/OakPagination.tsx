import React, { useState, useEffect } from 'react';
import './styles/oak-pagination.scss';
import OakSelect from './OakSelect';
import OakSelectPlain from './OakSelectPlain';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

interface Props {
  onChangePage: any;
  totalRows: number;
  label?: string;
  customActions?: any;
  children?: any;
}

const OakPagination = (props: Props) => {
  const [data, setData] = useState({
    rowsPerPage: 5,
    pageNo: 1,
  });

  useEffect(() => {
    pageChanged();
  }, [data]);

  const previousPage = () => {
    if (data.pageNo !== 1) {
      setData({ ...data, pageNo: data.pageNo - 1 });
    }
  };

  const pageChanged = () => {
    props.onChangePage(data.pageNo, data.rowsPerPage);
  };

  const nextPage = () => {
    if (Math.ceil(props.totalRows / data.rowsPerPage) !== data.pageNo) {
      setData({ ...data, pageNo: data.pageNo + 1 });
    }
  };

  const handleChange = event => {
    setData({ ...data, [event.target.name]: event.target.value || 5 });
  };

  return (
    <div className="oak-pagination">
      <div className="oak-pagination--left">
        {props.children}
      </div>
      <div className="oak-pagination--right">
        <div>{props.label ? props.label : 'Rows per page'}</div>
        <div>
          <OakSelectPlain
            data={data}
            id="rowsPerPage"
            handleChange={e => handleChange(e)}
            elements={['5', '10', '20', '50']}
            variant="underline"
          />
        </div>
        <div className="page-number">
          <div>
            {(data.pageNo - 1) * data.rowsPerPage + 1}-{' '}
            {data.pageNo * data.rowsPerPage < props.totalRows
              ? data.pageNo * data.rowsPerPage
              : props.totalRows}
            &nbsp;of&nbsp; {props.totalRows}{' '}
          </div>
        </div>
        <div className="page-nav">
          <div>
            <KeyboardArrowLeft
              className={
                data.pageNo === 1 ? 'disabled' : ''
              }
              onClick={previousPage}
            />
          </div>
          <div>
            <KeyboardArrowRight
              className={
                Math.ceil(props.totalRows / data.rowsPerPage) === data.pageNo
                  ? 'disabled'
                  : ''
              }
              onClick={nextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OakPagination;
