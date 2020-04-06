import { changeTab } from '../../redux/home/actions';
import { connect } from 'react-redux';
import './SwitchButtons.scss';
import React from 'react';

const SwitchButtons = ({ focusedTab, changeTab }) => {
  // const { focus, handleFocus } = props;
  return (
    <div className='SwitchButtons'>
      <button autoFocus onClick={() => changeTab(1)} className={focusedTab === 1 ? 'ButtonItem Button-Active' : 'ButtonItem'}>
        Movies
      </button>
      <button onClick={() => changeTab(2)} className={focusedTab === 2 ? 'ButtonItem Button-Active' : 'ButtonItem'}>
        TV Shows
      </button>
    </div>
  );
};

/** redux methods */
const mapStateToProps = ({ home: { focusedTab } }) => ({
  focusedTab,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeTab: (tab: number) => dispatch(changeTab(tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitchButtons);
