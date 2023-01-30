import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AlertModalOrganism } from '../../Organisms';
export default function LandingPage () {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}
