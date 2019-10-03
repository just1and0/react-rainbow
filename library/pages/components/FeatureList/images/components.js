import React from 'react';
import PropTypes from 'prop-types';

const Components = props => {
    const { className } = props;
    return (
        <svg
            className={className}
            fill="#01B6F5"
            width="100px"
            height="100px"
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g transform="translate(-280.000000, -206.000000)">
                <g transform="translate(280.000000, 206.000000)">
                    <g transform="translate(0.000000, 0.000000)">
                        <path
                            d="M89.4538767,46.6385686 C89.8264414,44.5906561 89.4469185,42.477336 88.3842942,40.6864811 C87.859841,39.8910537 88.0789264,38.8214712 88.8743539,38.2970179 C89.1727634,38.1003976 89.5264414,38.0001988 89.8852883,38.012326 L99.9089463,38.012326 L99.9089463,10.4085487 C99.9089463,4.69105368 95.2749503,0.0570576541 89.5574553,0.0570576541 L62.1087475,0.0570576541 L62.1087475,10.0980119 C62.1157058,11.0502982 62.893837,11.8180915 63.8461233,11.8111332 C64.1308151,11.8093439 64.4119284,11.7369781 64.6622266,11.599006 C66.4807157,10.4930417 68.6475149,10.1119284 70.7349901,10.5294235 C75.4224652,11.3765408 78.5365805,15.8638171 77.6894632,20.5530815 C76.8423459,25.2405567 72.3550696,28.354672 67.6658052,27.5075547 C66.687674,27.3298211 65.7473161,26.9864811 64.8864811,26.4878728 C64.061829,26.0099404 63.0059642,26.2912525 62.5298211,27.1159046 C62.3642147,27.4005964 62.2848907,27.7284294 62.2986083,28.0578529 L62.1087475,38.0125249 L71.9081511,38.0125249 C72.8588469,37.960835 73.673161,38.6888668 73.7248509,39.6411531 C73.7437376,39.9759443 73.6628231,40.3105368 73.4954274,40.6003976 C72.7328032,41.9099404 72.3326044,43.3988072 72.3395626,44.9135189 C72.3395626,49.6769384 76.2023857,53.5397614 80.9673956,53.5379722 C85.1373757,53.5379722 88.710338,50.5532803 89.4538767,46.4489066 L89.4538767,46.6385686 Z"
                            fill="#5C56B6"
                        />
                        <path
                            d="M10.5067594,100.121074 L37.9552684,100.121074 L9.29900596,100.121074 C9.70099404,100.148708 10.1047714,100.148708 10.5067594,100.121074 Z"
                            fill="#FFA83D"
                        />
                        <path
                            d="M37.9552684,72.5172962 C37.9898608,72.305169 37.9898608,72.0912525 37.9552684,71.8789264 L37.9552684,72.0858847 C37.9725646,72.2290258 37.9725646,72.3739563 37.9552684,72.5172962 Z"
                            fill="#FFA83D"
                        />
                        <path
                            d="M53.3616302,41.3248509 C53.2373757,40.7797217 53.0596421,40.2465209 52.826839,39.7375746 C51.6950298,37.1393638 49.360835,35.2640159 46.5815109,34.7170974 C44.5335984,34.3306163 42.4151093,34.7119284 40.6294235,35.7866799 C39.833996,36.3111332 38.7644135,36.0920477 38.2399602,35.2966203 C38.04334,34.9982107 37.9431412,34.6445328 37.9552684,34.2856859 L37.9552684,24.210338 L10.3514911,24.210338 C4.63399602,24.210338 0,28.844334 0,34.561829 L0,39.7375746 L0,62.1658052 L10.3514911,62.1658052 L10.7137177,62.1658052 C10.9500994,62.0829026 11.1673956,61.9552684 11.3520875,61.7862823 L11.455666,61.6827038 C11.8697813,61.0357853 11.8697813,60.2075547 11.455666,59.5606362 C11.1105368,58.9827038 10.8449304,58.3616302 10.6620278,57.7147117 C9.63379722,55.0457256 10.1789264,52.0248509 12.0767396,49.8821074 C13.2930417,48.2345924 15.0632207,47.0836978 17.0626243,46.6385686 C17.4369781,46.555666 17.8182903,46.5039761 18.2011928,46.4833002 C23.0232604,46.0640159 27.2725646,49.6335984 27.6916501,54.455666 C27.7157058,54.7248509 27.7262425,54.9956262 27.7244533,55.2648111 C27.7314115,56.7795229 27.3310139,58.2683897 26.5685885,59.5779324 C26.0906561,60.4025845 26.3719682,61.4584493 27.1966203,61.9363817 C27.4882704,62.1053678 27.8210736,62.1848907 28.1558648,62.1658052 L33.2107356,62.1658052 L37.9550696,62.1658052 L37.9550696,51.8143141 C37.9550696,50.4858847 39.4904573,50.0027833 40.6465209,50.6757455 C41.9560636,51.4383698 43.4449304,51.8385686 44.9596421,51.8316103 C49.7230616,51.8230616 53.5789264,47.9532803 53.5685885,43.1880716 C53.5687873,42.561829 53.4980119,41.9373757 53.3616302,41.3248509 Z"
                            fill="#01B6F5"
                        />
                        <path
                            d="M65.9387674,62.1658052 C64.9864811,62.1727634 64.2186879,62.9508946 64.2256461,63.9031809 C64.2274354,64.1878728 64.2998012,64.4689861 64.4377734,64.7192843 C66.8789264,68.8115308 65.540159,74.1063618 61.4479125,76.5457256 C60.6630219,77.0133201 59.8089463,77.3548708 58.9168986,77.5550696 C57.6936382,77.8139165 56.4308151,77.8139165 55.2075547,77.5550696 C50.5510934,76.5457256 47.595825,71.9532803 48.6049702,67.2968191 C48.7912525,66.4341948 49.1105368,65.606163 49.5487078,64.840159 C50.07833,64.0483101 49.8662028,62.9769384 49.0743539,62.4473161 C48.8449304,62.293837 48.5809145,62.1972167 48.3065606,62.166004 L37.9550696,62.166004 L37.9550696,71.8274354 C37.9964215,72.0550696 37.9964215,72.2898608 37.9550696,72.517495 C37.672167,73.5560636 36.599006,74.1685885 35.5604374,73.8838966 C35.4586481,73.8562624 35.3586481,73.8200795 35.2636183,73.7769384 C33.9576541,73.0057654 32.466998,72.6055666 30.950497,72.6210736 C26.2335984,72.6487078 22.433002,76.4942346 22.4606362,81.2111332 C22.4882704,85.9280318 26.3337972,89.7286282 31.0506958,89.700994 C32.5982107,89.6924453 34.1129225,89.2628231 35.4361829,88.4588469 C36.2729622,88.0015905 37.3200795,88.3087475 37.777336,89.1437376 C37.9170974,89.399006 37.9894632,89.6854871 37.9894632,89.9769384 L37.9548708,100.121272 L65.5586481,100.121272 C71.2761431,100.121272 75.9101392,95.4872763 75.9101392,89.7697813 L75.9101392,62.1658052 L65.9387674,62.1658052 Z"
                            fill="#FF6837"
                        />
                        <polygon
                            fill="#FFA83D"
                            points="37.9552684 62.2001988 37.9552684 62.2001988 37.9552684 62.217495"
                        />
                        <path
                            d="M35.4363817,88.4584493 C31.4510934,91.0703777 26.1045726,89.9558648 23.4924453,85.9723658 C20.8805169,81.9888668 21.9950298,76.6405567 25.9785288,74.0284294 C27.4518887,73.0622266 29.1874751,72.5705765 30.9489066,72.6206759 C32.4654076,72.605169 33.9560636,73.0053678 35.2620278,73.7765408 C36.2419483,74.2250497 37.3978131,73.793837 37.8465209,72.8139165 C37.889662,72.7172962 37.9258449,72.6188867 37.9534791,72.5170974 C37.9707753,72.3739563 37.9707753,72.2290258 37.9534791,72.0858847 L37.9534791,62.1658052 L33.2091451,62.1658052 L28.1542744,62.1658052 C27.2035785,62.217495 26.3892644,61.4894632 26.3375746,60.5371769 C26.3186879,60.2023857 26.3996024,59.8677932 26.566998,59.5779324 C27.3296223,58.2683897 27.7298211,56.7795229 27.7228628,55.2648111 C27.7210736,50.4238569 23.7980119,46.5005964 18.9568588,46.5023857 C18.7031809,46.5023857 18.4512922,46.5127237 18.1994036,46.5351889 C17.8163022,46.5558648 17.4351889,46.6075547 17.060835,46.6904573 C15.111332,47.12167 13.3757455,48.2276342 12.1612326,49.8131213 C10.2634195,51.9540755 9.71829026,54.9749503 10.7465209,57.6457256 C10.9294235,58.2926441 11.1950298,58.9137177 11.540159,59.4916501 C11.9542744,60.1385686 11.9542744,60.9667992 11.540159,61.6137177 L11.4365805,61.7172962 C11.2518887,61.8862823 11.0345924,62.0141153 10.7982107,62.0968191 L10.3512922,62.1658052 L0,62.1658052 L0,89.7695825 C0.0656063618,95.0626243 4.04214712,99.489662 9.29900596,100.121074 L37.9552684,100.121074 L37.9552684,89.9767396 C37.9483101,89.0244533 37.1685885,88.2584493 36.2163022,88.2652087 C35.945328,88.266998 35.6779324,88.3341948 35.4363817,88.4584493 Z"
                            fill="#FFB900"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

Components.propTypes = {
    className: PropTypes.string,
};

Components.defaultProps = {
    className: undefined,
};

export default Components;
