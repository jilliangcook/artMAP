import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'material-ui';
import { connect } from 'react-redux';
import { cancelProcessing as cancelProcessingAction } from '../../action';
import OperationProgress from './component/operationProgress';
import OperationList from './component/operationList';
import { PipelineOperationProps } from '../../propTypes';

function PipelineProcessing({ progress, operations, cancelProcessing }) {
  return (
    <Grid container spacing={40}>
      <OperationProgress progress={progress} cancelProcessing={cancelProcessing} />
      <OperationList operations={operations} />
    </Grid>
  );
}

PipelineProcessing.propTypes = {
  cancelProcessing: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  operations: PropTypes.arrayOf(PropTypes.shape(PipelineOperationProps)).isRequired,
};

const mapStateToProps = state => state.pipeline;

export default connect(mapStateToProps, {
  cancelProcessing: cancelProcessingAction,
})(PipelineProcessing);
