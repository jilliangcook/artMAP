import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { goToNextStep as goToNextStepAction } from '../../action';
import { BackButton } from '..';
import PipelineStepOption from './component/pipelineStepOption';
import PipelineStepOptionList from './component/pipelineStepOptionList';

function PipelineStepLengthOfReads({ goToNextStep }) {
  const FirstOption = (
    <PipelineStepOption
      title="bp &gt; 100"
      onSelect={() => goToNextStep({ bigBP: true })}
      actionTitle="I have data with bp &gt; 100"
    />
  );
  const SecondOption = (
    <PipelineStepOption
      title="bp &le; 100"
      onSelect={() => goToNextStep({ bigBP: false })}
      actionTitle="I have data with bp &le; 100"
    />
  );

  return (
    <PipelineStepOptionList
      firstOption={FirstOption}
      secondOption={SecondOption}
      actions={<BackButton />}
    />
  );
}

PipelineStepLengthOfReads.propTypes = {
  goToNextStep: PropTypes.func.isRequired,
};

export default connect(null, {
  goToNextStep: goToNextStepAction,
})(PipelineStepLengthOfReads);
