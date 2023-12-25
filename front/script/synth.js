const attackKnob = $('#attack');
const decayKnob = $('#decay');
const sustainKnob = $('#sustain');
const releaseKnob = $('#release');
const waveformTypes = $('li.waveforms');

let audioCtx;
let selWaveform;

$('#startSiteBtn').on('click', () => {
    $('#welcome-page').hide();
    $('#synth').show()

    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
});

waveformTypes.each(function() {
    $(this).on('click', () => {
        waveformTypes.removeClass('selected-waveform');
        $(this).addClass('selected-waveform');
    });
});