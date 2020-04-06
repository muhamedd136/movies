import { changeTab } from '../../redux/home/actions';
import { connect } from 'react-redux';
import './SwitchButtons.scss';
import React from 'react';

const SwitchButtons = (props: any) => {
  // const { focus, handleFocus } = props;
  return (
    <div className='SwitchButtons'>
      <button autoFocus onClick={() => props.changeTab(1)} className={props.focusedTab === 1 ? 'ButtonItem Button-Active' : 'ButtonItem'}>
        Movies
      </button>
      <button onClick={() => props.changeTab(2)} className={props.focusedTab === 2 ? 'ButtonItem Button-Active' : 'ButtonItem'}>
        TV Shows
      </button>
    </div>
  );
};

/** redux methods */
const mapStateToProps = (state: any) => {
  const { home } = state;
  return { focusedTab: home.focusedTab };
};

const mapDispatchToProps = (dispatch: any) => ({
  changeTab: (tab: number) => dispatch(changeTab(tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitchButtons);
