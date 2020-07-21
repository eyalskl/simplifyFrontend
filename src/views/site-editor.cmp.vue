<template>
  <container class="editor flex animate__animated animate__fadeIn">
    <element-dashboard :samples="samples" @shouldAcceptDrop="false" />
    <site-workspace
      v-if="siteToEdit"
      :siteToEdit="siteToEdit"
      @shouldAcceptDrop="true"
    />
  </container>
</template>

<script>
import siteWorkspace from '../components/site-workspace.cmp.vue';
import elementDashboard from '@/components/element-dashboard.cmp.vue';
import { templateService } from '@/services/template-service.js';
import { Container, Draggable } from 'vue-smooth-dnd';
import { applyDrag, generateItems } from '@/assets/drag-test.js';

import {
  eventBus,
  ADD_SAMPLE,
  EDIT_ELEMENT,
  CLONE_ELEMENT,
  REMOVE_ELEMENT,
  MOVE_ELEMENT
} from '@/services/event-bus.service.js';

const _ = require('lodash');

export default {
  name: 'site-editor',
  data() {
    return {
      samples: {},
      siteToEdit: {
        name: 'Food',
        previewImg:
          'https://i.ibb.co/X5LMRVk/screenshot-localhost-8080-2020-07-21-22-49-51.png',
        createdBy: {
          username: 'eni',
          _id: '5e26e0b718a0891d4c995527'
        },
        cmps: [
          {
            type: 'site-section',
            class: 'text-logo-text-section',
            style: {
              backgroundColor: 'white',
              height: 'auto',
              padding: '10px 10px 10px 10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  textAlign: 'center',
                  color: '#BA2204'
                },
                cmps: [
                  {
                    type: 'site-text',
                    content: `BEST GRILLED CHEESE IN TOWN 
                              FRESH & QUALITY CRAFT FOOD
                    `,
                    style: {}
                  }
                ]
              },
              {
                type: 'site-div',
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center'
                },
                cmps: [
                  {
                    type: 'site-image',
                    content:
                      'https://static.wixstatic.com/media/011abe_cfe720bc821e40eeb582ac83c83886da~mv2.png/v1/fill/w_206,h_206,al_c,q_85,usm_0.66_1.00_0.01/logo%20sans%20fond.webp',
                    style: {
                      objectFit: 'contain',
                      width: '100%',
                      maxWidth: '250px',
                      height: 'auto'
                    }
                  },
                  {
                    type: 'site-text',
                    content: `PARIS / SINCE 2014
                    `,
                    style: {}
                  }
                ]
              },
              {
                type: 'site-div',
                style: {
                  textAlign: 'center'
                },
                cmps: [
                  {
                    type: 'site-text',
                    content: `PARIS - BASTILLE / CONVENTION
                              PEACE, LOVE & GRILLED CHEESE
                    `,
                    style: { color: '#BA2204' }
                  }
                ]
              }
            ]
          },
          {
            type: 'site-section',
            class: 'cover-photo-section',
            style: {
              background: `url('https://static.wixstatic.com/media/011abe_d414d4db04804dceaf2b0986586097a1~mv2_d_2560_1440_s_2.jpeg/v1/fill/w_980,h_705,al_c,q_85,usm_0.66_1.00_0.01/011abe_d414d4db04804dceaf2b0986586097a1~mv2_d_2560_1440_s_2.webp') no-repeat`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              width: '100%',
              height: '40vw',
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'Righteous'
            },
            cmps: []
          },
          {
            type: 'site-section',
            class: 'text-on-photo',
            style: {
              width: '100%',
              height: '40vw',
              display: 'flex',
              flexDirection: 'row',
              
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  background: `url('https://static.wixstatic.com/media/11062b_9108ae2752254777a3ac7000818dc9bcf000.jpg/v1/fill/w_980,h_696,al_c,q_85,usm_0.33_1.00_0.00/11062b_9108ae2752254777a3ac7000818dc9bcf000.webp') no-repeat`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                  alignItems: 'flex-start'
                },
                cmps: [
                  {
                    type: 'site-div',
                    style: {
                      width: '30%',
                      textAlign: 'center'
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content: `touS nos pains sont réalisés sur mesure  et pétris avec amour tous les jours par nos boulangers
                    `,
                        style: {
                          backgroundColor: '#BA2204',
                          fontSize: '1.2‬rem',
                          fontFamily: 'Bitter',
                          color: '#ffffff'
                        }
                      }
                    ]
                  },
                  {
                    type: 'site-div',
                    style: {
                      width: '30%',
                      textAlign: 'center'
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content: `chaque grilled cheese est préparé a la commande, cuits à la main à la poêle dans nos cuisines ouvertes
                    `,
                        style: {
                          backgroundColor: '#BA2204',
                          fontSize: '1.1rem',
                          fontFamily: 'Bitter',
                          color: '#ffffff'
                        }
                      }
                    ]
                  },
                  {
                    type: 'site-div',
                    style: {
                      width: '30%',
                      textAlign: 'center'
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content: `suivez chaque etape de sa réalisation
                    `,
                        style: {
                          backgroundColor: '#BA2204',
                          fontSize: '1.1rem',
                          fontFamily: 'Bitter',
                          color: '#ffffff'
                        }
                      }
                    ]
                  },
                  {
                    type: 'site-div',
                    style: {
                      width: '30%',
                      textAlign: 'center'
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content: `tout nos produits sont frais et choisiS avec précaution par nos soins
                    `,
                        style: {
                          backgroundColor: '#BA2204',
                          fontSize: '1.1‬rem',
                          fontFamily: 'Bitter',
                          color: '#ffffff'
                        }
                      }
                    ]
                  },
                  {
                    type: 'site-div',
                    style: {
                      width: '30%',
                      textAlign: 'center'
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content: `toutes nos préparations sont faites maison
                    `,
                        style: {
                          backgroundColor: '#BA2204',
                          fontSize: '1.1rem',
                          fontFamily: 'Bitter',
                          color: '#ffffff'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: 'site-section',
            class: 'three-pics-section',
            style: {
              width: '100%',
              height: '40vw',
              display: 'flex'
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  background: `url('https://static.wixstatic.com/media/011abe_ec8923361bb74b9caeb7a218a7ed4d4a~mv2.jpg/v1/fill/w_422,h_913,al_c,q_85,usm_0.66_1.00_0.01/011abe_ec8923361bb74b9caeb7a218a7ed4d4a~mv2.webp') no-repeat`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                  width: '100%'
                },
                cmps: []
              },
              {
                type: 'site-div',
                style: {
                  background: `url('https://media1.giphy.com/media/JxOTtKGVWCuE8/giphy.gif') no-repeat`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                  width: '100%'
                },
                cmps: []
              },
              {
                type: 'site-div',
                style: {
                  background: `url('https://static.wixstatic.com/media/011abe_ff28d29d1bb64b40af34425bfaeaded1~mv2.jpg/v1/fill/w_420,h_913,al_c,q_85,usm_0.66_1.00_0.01/011abe_ff28d29d1bb64b40af34425bfaeaded1~mv2.webp') no-repeat`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                  width: '100%'
                },
                cmps: []
              }
            ]
          },
          {
            type: 'site-section',
            class: 'post-card-section',
            style: {
              backgroundColor: `#ffffff`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              width: '100%',
              height: '30vw',
              display: 'flex',
              justifyContent: 'space-around'
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  backgroundColor: `#ffffff`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                  objectFit: 'contain',
                  display: 'flex',
                  width: '100%',
                  maxWidth: '1000px',
                  height: 'auto'
                },
                cmps: [
                  {
                    type: 'site-div',
                    style: {
                      backgroundColor: '#ffffff',
                      backgroundPosition: `center`,
                      backgroundSize: `cover`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      width: '100%'
                    },
                    cmps: [
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `LE PLUS CHEESY CHIC ET TELLEMENT SEXY !
                        `,
                            style: {
                              fontSize: '1.4rem',
                              fontFamily: 'Oswald',
                              color: '#EF4135'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `L'Authentique
                        `,
                            style: {
                              fontSize: '2.5rem',
                              textDecoration: 'underline',
                              fontFamily: 'Mr Dafoe',
                              color: '#EF4135'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `Mozzarella

                                      Cheddar
                        `,
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Inknut Antiqua',
                              color: '#EF4135'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `Tout est dans sa simplicité.

                                      Croquant à l'extérieur et coulant à l'intérieur.

                                      L'Authentique est le  Grilled Cheese traditionnel américain par excellence.
                        `,
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Josefin Slab',
                              color: '#000000'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-around'
                        },
                        cmps: [
                          {
                            type: 'site-button',
                            content: { text: 'ME FAIRE LIVRER', href: '' },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#EF4135',
                              textTransform: 'uppercase',
                              border: '3px #EF4135 solid',
                              borderRadius: '0'
                            }
                          },
                          {
                            type: 'site-button',
                            content: { text: 'VOIR LE MENU', href: '' },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#EF4135',
                              textTransform: 'uppercase',
                              border: '3px #EF4135 solid',
                              borderRadius: '0'
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'site-div',
                    style: {
                      background: `url('https://static.wixstatic.com/media/011abe_7ba06f4f989e4c439c9828113223cdaa~mv2.jpg/v1/crop/x_0,y_150,w_1080,h_1092/fill/w_490,h_496,al_c,q_80,usm_0.66_1.00_0.01/AUTHENTIQUE.webp') no-repeat`,
                      backgroundPosition: `center`,
                      backgroundSize: `cover`,
                      width: '100%'
                    },
                    cmps: []
                  }
                ]
              }
            ]
          },
          {
            type: 'site-section',
            class: 'post-card-section',
            style: {
              backgroundColor: `#ffffff`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              width: '100%',
              height: '30vw',
              display: 'flex',
              justifyContent: 'space-around'
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  backgroundColor: `#ffffff`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                  objectFit: 'contain',
                  display: 'flex',
                  width: '100%',
                  maxWidth: '1000px',
                  height: 'auto'
                },
                cmps: [
                  {
                    type: 'site-div',
                    style: {
                      background: `url('https://static.wixstatic.com/media/011abe_2bbfe16dfa7048c184824370f75af6eb~mv2.jpg/v1/fill/w_490,h_490,al_c,q_80,usm_0.66_1.00_0.01/Veggie%20hemblem.webp') no-repeat`,
                      backgroundPosition: `center`,
                      backgroundSize: `cover`,
                      width: '100%',
                    },
                    cmps: []
                  },
                  {
                    type: 'site-div',
                    style: {
                      backgroundColor: '#ffffff',
                      backgroundPosition: `center`,
                      backgroundSize: `cover`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      width: '100%'
                    },
                    cmps: [
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `VEGETARIEN ? ALL RIGHT !
                        `,
                            style: {
                              fontSize: '1.4rem',
                              fontFamily: 'Oswald',
                              color: '#F7B714'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `Le Veggie
                        `,
                            style: {
                              fontSize: '2.5rem',
                              textDecoration: 'underline',
                              fontFamily: 'Mr Dafoe',
                              color: '#F7B714'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `Mozzarella 

                                        Confits de tomates & olives maison

                                        Pesto maison

                                        Poivrons
                        `,
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Inknut Antiqua',
                              color: '#F7B714'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `Un des Grilled Cheese les plus surprenant.

                                      Le confit a cuit pendant deux heures et le pesto apporte la juste touche de fraîcheur.

                                      Le Veggie est la recette emblématique des quartiers italo-américains de New-York.
                        `,
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Josefin Slab',
                              color: '#000000'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-around'
                        },
                        cmps: [
                          {
                            type: 'site-button',
                            content: { text: 'ME FAIRE LIVRER', href: '' },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#F7B714',
                              textTransform: 'uppercase',
                              border: '3px #F7B714 solid',
                              borderRadius: '0'
                            }
                          },
                          {
                            type: 'site-button',
                            content: { text: 'VOIR LE MENU', href: '' },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#F7B714',
                              textTransform: 'uppercase',
                              border: '3px #F7B714 solid',
                              borderRadius: '0'
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: 'site-section',
            class: 'post-card-section',
            style: {
              backgroundColor: `#ffffff`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              width: '100%',
              height: '30vw',
              display: 'flex',
              justifyContent: 'space-around'
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  backgroundColor: `#ffffff`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                  objectFit: 'contain',
                  display: 'flex',
                  width: '100%',
                  maxWidth: '1000px',
                  height: 'auto'
                },
                cmps: [
                  {
                    type: 'site-div',
                    style: {
                      backgroundColor: '#ffffff',
                      backgroundPosition: `center`,
                      backgroundSize: `cover`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      width: '100%'
                    },
                    cmps: [
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `CARNIVORE ? WELCOME HOME !
                        `,
                            style: {
                              fontSize: '1.4rem',
                              fontFamily: 'Oswald',
                              color: '#EF4135'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `Le Pastrami
                        `,
                            style: {
                              fontSize: '2.5rem',
                              textDecoration: 'underline',
                              fontFamily: 'Mr Dafoe',
                              color: '#EF4135'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `Mozzarella

                                        Pastrami

                                        Cornichons Pickels 

                                        Moutarde au miel

                                        Cheddar

                                        Tomme d'Abondance
                        `,
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Inknut Antiqua',
                              color: '#EF4135'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `C'est du sérieux !

                                      C'est fondant, c'est épicé, c'est dégoulinant de fromage,

                                      c'est ... c'est ... c'est trop bon quoi !

                                      Le Pastrami c'est la recette secrète des resto yiddish de Brooklyn.
                        `,
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Josefin Slab',
                              color: '#000000'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-around'
                        },
                        cmps: [
                          {
                            type: 'site-button',
                            content: { text: 'VOIR LE MENU', href: '' },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#EF4135',
                              textTransform: 'uppercase',
                              border: '3px #EF4135 solid',
                              borderRadius: '0'
                            }
                          },
                          {
                            type: 'site-button',
                            content: { text: 'VOIR LE MENU', href: '' },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#EF4135',
                              textTransform: 'uppercase',
                              border: '3px #EF4135 solid',
                              borderRadius: '0'
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'site-div',
                    style: {
                      background: `url('https://static.wixstatic.com/media/011abe_c00ecf63f2264f048ce832473a073fa8~mv2.jpg/v1/crop/x_0,y_125,w_768,h_767/fill/w_490,h_490,al_c,q_80,usm_0.66_1.00_0.01/Pastrami%20assiette%20hemblem.webp') no-repeat`,
                      backgroundPosition: `center`,
                      backgroundSize: `cover`,
                      width: '100%'
                    },
                    cmps: []
                  }
                ]
              }
            ]
          },
          {
            type: 'site-section',
            class: 'post-card-section',
            style: {
              backgroundColor: `#ffffff`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              // width: '100%',
              height: '30vw',
              display: 'flex',
              justifyContent: 'space-around'
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  backgroundColor: `#ffffff`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                  objectFit: 'contain',
                  display: 'flex',
                  width: '100%',
                  maxWidth: '1000px',
                  height: 'auto'
                },
                cmps: [
                  {
                    type: 'site-div',
                    style: {
                      background: `url('https://static.wixstatic.com/media/011abe_b92ec2bd678c4bbd995dcee9eab95f30~mv2.jpg/v1/fill/w_340,h_426,fp_0.50_0.50,q_90/011abe_b92ec2bd678c4bbd995dcee9eab95f30~mv2.webp') no-repeat`,
                      backgroundPosition: `center`,
                      backgroundSize: `cover`,
                      width: '100%'
                    },
                    cmps: []
                  },
                  {
                    type: 'site-div',
                    style: {
                      backgroundColor: '#ffffff',
                      backgroundPosition: `center`,
                      backgroundSize: `cover`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      width: '100%'
                    },
                    cmps: [
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `MACARONI & CHEESE ?!?
                        `,
                            style: {
                              fontSize: '1.4rem',
                              fontFamily: 'Oswald',
                              color: '#F7B714'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `Le Mac & Cheese
                        `,
                            style: {
                              fontSize: '2.5rem',
                              textDecoration: 'underline',
                              fontFamily: 'Mr Dafoe',
                              color: '#F7B714'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `Mozzarella

                                      Oignons confits maison

                                      Mac & Cheese (béchamel muscade & cheddar)

                                      Cheddar
                        `,
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Inknut Antiqua',
                              color: '#F7B714'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundColor: '#ffffff',
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          textAlign: 'center',
                          width: '100%'
                        },
                        cmps: [
                          {
                            type: 'site-text',
                            content: `C'est notre best seller !

                                      Tout droit venu de la West Coast, c'est à Los Angeles que le fameux mac & cheese américain a pour la première fois glissé entre deux tranches de pains.

                                      Destination Venice Beach pour une experience sans égale.
                                      `,
                            style: {
                              fontSize: '0.9rem',
                              fontFamily: 'Josefin Slab',
                              color: '#000000'
                            }
                          }
                        ]
                      },
                      {
                        type: 'site-div',
                        style: {
                          backgroundPosition: `center`,
                          backgroundSize: `cover`,
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-around'
                        },
                        cmps: [
                          {
                            type: 'site-button',
                            content: { text: 'ME FAIRE LIVRER', href: '' },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#F7B714',
                              textTransform: 'uppercase',
                              border: '3px #F7B714 solid',
                              borderRadius: '0'
                            }
                          },
                          {
                            type: 'site-button',
                            content: { text: 'VOIR LE MENU', href: '' },
                            style: {
                              backgroundColor: '#ffffff',
                              fontFamily: 'Righteous',
                              color: '#F7B714',
                              textTransform: 'uppercase',
                              border: '3px #F7B714 solid',
                              borderRadius: '0'
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: 'site-section',
            class: 'info-block-section',
            style: {
              background: '#ba2204',
              // width: '100%',
              height: '50vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center'
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  display: 'flex',
                  justifyContent: 'space-around',
                },
                cmps: [
                  {
                    type: 'site-div',
                    style: {
                      width: '45%',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column'
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content: `BASTILLE
                    `,
                        style: {
                          backgroundColor: '#BA2204',
                          fontSize: '3.5rem',
                          fontFamily: 'Bitter',
                          color: '#F7B714'
                        }
                      },
                      {
                        type: 'site-text',
                        content: `9 RUE JACQUES COEUR - 75004 PARIS 01 77 10 67 83 
                    `,
                        style: {
                          backgroundColor: '#BA2204',
                          fontSize: '1.2‬rem',
                          fontFamily: 'Bitter',
                          color: '#ffffff'
                        }
                      }
                    ]
                  },
                  {
                    type: 'site-div',
                    style: {
                      width: '45%',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column'
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content: `CONVENTION
                    `,
                        style: {
                          backgroundColor: '#BA2204',
                          fontSize: '3.5rem',
                          fontFamily: 'Bitter',
                          color: '#F7B714'
                        }
                      },
                      {
                        type: 'site-text',
                        content: `196 RUE DE LA CONVENTION - 75015 PARIS 09 88 38 87 26 
                    `,
                        style: {
                          backgroundColor: '#BA2204',
                          fontSize: '1.2‬rem',
                          fontFamily: 'Bitter',
                          color: '#ffffff'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                type: 'site-div',
                style: {
                  textAlign: 'center'
                },
                cmps: [
                  {
                    type: 'site-text',
                    content: `NOUVEAUX HORAIRES SUITE A LA CRISE DU COVID 19 :
                      7/7 - 12H - 16H & 19H - 23H
                    `,
                    style: {
                      backgroundColor: '#f7b714',
                      fontSize: '1.1rem',
                      fontFamily: 'josefin slab',
                      color: '#000000',
                      fontWeight: 'bold'
                    }
                  }
                ]
              },
              {
                type: 'site-div',
                style: {
                  textAlign: 'center'
                },
                cmps: [
                  {
                    type: 'site-text',
                    content: `NOTRE PERSONNEL EST FORME AUX NORMES SANITAIRES EN VIGUEUR. ENSEMBLE FAISONS FACE A LA CRISE SANTAIRE.
                    `,
                    style: {
                      backgroundColor: '#f7b714',
                      fontSize: '1.1rem',
                      fontFamily: 'josefin slab',
                      color: '#000000',
                      fontWeight: 'bold'
                    }
                  }
                ]
              },
              {
                type: 'site-div',
                style: {
                  display: 'flex',
                  alignItems: 'center',
                },
                cmps: [
                  {
                        type: 'site-image',
                        content:
                          'https://static.wixstatic.com/media/011abe_35658b808c1b4f8d83e1f43e9c497038~mv2.png/v1/fill/w_188,h_188,al_c,q_85,usm_0.66_1.00_0.01/logo%20sans%20fond%20blanc.webp',
                        style: {
                          width: '20%',
                          textAlign: 'center',
                          objectFit: 'contain',
                          width: '100%',
                          maxWidth: '250px',
                          height: 'auto'
                        }
                      },
                  {
                          type: 'site-text',
                          content: `© 2020 THE GRILLED CHEESE FACTORY COMPANY
                                    L'AUTHENTQUE SANDWICH AU FROMAGE FONDU
                            `,
                          style: {
                          width: '70%',
                          textAlign: 'center',
                          fontSize: '1.1rem',
                          fontFamily: 'josefin slab',
                          color: '#ffffff',
                          fontWeight: 'bold'
                        }
                      }
                ]
              }
            ]
          }
        ]
      }
    };
  },
  computed: {
    // siteToEdit(){
    //     return this.$store.getters.site;
    // }
  },
  async created() {
    this.loadSite();

    this.samples = templateService.getSamplesOf('section');

    eventBus.$on(ADD_SAMPLE, sample => this.addSample(sample));
    eventBus.$on(CLONE_ELEMENT, element => this.clone(element));
    eventBus.$on(REMOVE_ELEMENT, elementId => this.remove(elementId));
    eventBus.$on(MOVE_ELEMENT, (elementId, direction) =>
      this.moveElement(elementId, direction)
    );
  },
  methods: {
    async loadSite() {
      const site = await this.$store.dispatch({
        type: 'loadSite',
        id: this.$route.params.id
      });
    },
    addSample(sample) {
      this.siteToEdit.cmps.unshift(sample);
      this.$store.commit({ type: 'setSite', site: this.siteToEdit });
    },
    getElementSamples(element) {
      this.samples = templateService.getSamplesOf(element);
    },
    moveElement(elementId, direction) {
      const cmps = this.siteToEdit.cmps;
      const idx = cmps.findIndex(cmp => cmp.id === elementId);
      if (direction === 'down' && idx + 1 < cmps.length) {
        const cmp = cmps[idx];
        cmps.splice(idx, 1, cmps[idx + 1]);
        cmps.splice(idx + 1, 1, cmp);
      } else if (direction === 'up' && idx !== 0) {
        const cmp = cmps[idx];
        cmps.splice(idx, 1, cmps[idx - 1]);
        cmps.splice(idx - 1, 1, cmp);
      }
      this.$store.commit({ type: 'setSite', site: this.siteToEdit });
    },
    clone(element) {
      const cmps = this.siteToEdit.cmps;
      const idx = cmps.findIndex(cmp => cmp.id === element.id);
      let clone = _.cloneDeep(element);
      clone.id = templateService.makeId();
      clone = templateService.addIds(clone);
      cmps.splice(idx, 0, clone);
      this.$store.commit({ type: 'setSite', site: this.siteToEdit });
    },
    remove(elementId) {
      const cmps = this.siteToEdit.cmps;
      const idx = cmps.findIndex(cmp => cmp.id === elementId);
      cmps.splice(idx, 1);
      this.$store.commit({ type: 'setSite', site: this.siteToEdit });
    }
  },
  watch: {
    '$route.params.id'() {
      this.loadSite();
    }
  },
  components: {
    siteWorkspace,
    elementDashboard,
    Container,
    Draggable
  }
};
</script>
