import React from 'react';
import { ItemPagination, Icon } from '../../Atoms';
MoleculePagination.defaultProps = {
  className: '',
  page: 1,
  onChangePagination: null,
  numberOfPages: 1,
  versArray: [5, 4, 3, 2, 1],
  ItemPaginationClassName: 'ItemPagination',
  ItemPaginationSelectedClassName: 'ItemPaginationSelected',
  NumberClassName: 'NumberItemPagination',
  IconItemPaginationClassName: 'IconItemPagination',
  NumberClassNameSelected: 'NumberItemPaginationSelected'
};
export default function MoleculePagination(props) {
  return (
    <div className={props.className}>
      {parseInt(props.page) > 1 ? (
        <ItemPagination
          className={props.IconItemPaginationClassName}
          onClick={() => props.onChangePagination('1')}
          icon={
            <div>
              <Icon
                icon='SortTop'
                color='#000000'
                size='10px'
                className='Icon_Pagination_previous_Page'
              />
              <Icon
                icon='SortTop'
                color='#000000'
                size='10px'
                className='Icon_Pagination_First_Page'
              />
            </div>
          }
        />
      ) : null}
      {parseInt(props.page) > 1 ? (
        <ItemPagination
          className={props.IconItemPaginationClassName}
          onClick={() =>
            props.onChangePagination((parseInt(props.page) - 1).toString())
          }
          icon={
            <Icon
              icon='SortTop'
              color='#000000'
              size='10px'
              className='Icon_Pagination_previous_Page'
            />
          }
        />
      ) : null}
      {props.versArray.map(i =>
        parseInt(props.page) - i > 0 &&
        parseInt(props.page) > parseInt(props.page) - i ? (
          <ItemPagination
            className={props.ItemPaginationClassName}
            onClick={() =>
              props.onChangePagination((parseInt(props.page) - i).toString())
            }
            NumberClassName={props.NumberClassName}
            page={props.page - i}
          />
        ) : null
      )}
      <ItemPagination
        className={props.ItemPaginationSelectedClassName}
        NumberClassName={props.NumberClassNameSelected}
        page={props.page}
      />
      {[...Array(2)].map((x, i) =>
        i > 0 && parseInt(props.page) + i <= parseInt(props.numberOfPages) ? (
          <ItemPagination
            className={props.ItemPaginationClassName}
            onClick={() =>
              props.onChangePagination((parseInt(props.page) + i).toString())
            }
            NumberClassName={props.NumberClassName}
            page={parseInt(props.page) + i}
          />
        ) : null
      )}
      {props.page.toString() !== props.numberOfPages.toString() ? (
        <ItemPagination
          className={props.IconItemPaginationClassName}
          onClick={() =>
            props.onChangePagination((parseInt(props.page) + 1).toString())
          }
          icon={
            <Icon
              icon='SortTop'
              color='#000000'
              size='10px'
              className='Icon_Pagination_next_Page'
            />
          }
        />
      ) : null}
      {props.page.toString() !== props.numberOfPages.toString() ? (
        <ItemPagination
          className={props.IconItemPaginationClassName}
          onClick={() =>
            props.onChangePagination(props.numberOfPages.toString())
          }
          icon={
            <div>
              <Icon
                icon='SortTop'
                color='#000000'
                size='10px'
                className='Icon_Pagination_next_Page'
              />
              <Icon
                icon='SortTop'
                color='#000000'
                size='10px'
                className='Icon_Pagination_last_Page'
              />
            </div>
          }
        />
      ) : null}
    </div>
  );
}
