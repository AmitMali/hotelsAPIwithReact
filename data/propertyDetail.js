{
  "data": {
    "propertySearch": {
      "__typename": "PropertySearchResults",
      "filterMetadata": {
        "__typename": "PropertyFilterMetadata",
        "amenities": [
          {
            "__typename": "PropertyAmenityValue",
            "id": 7
          },
          {
            "__typename": "PropertyAmenityValue",
            "id": 83
          },
          {
            "__typename": "PropertyAmenityValue",
            "id": 14
          },
          {
            "__typename": "PropertyAmenityValue",
            "id": 82
          },
          {
            "__typename": "PropertyAmenityValue",
            "id": 16
          },
          {
            "__typename": "PropertyAmenityValue",
            "id": 19
          },
          {
            "__typename": "PropertyAmenityValue",
            "id": 27
          },
          {
            "__typename": "PropertyAmenityValue",
            "id": 71
          },
          {
            "__typename": "PropertyAmenityValue",
            "id": 73
          },
          {
            "__typename": "PropertyAmenityValue",
            "id": 80
          },
          {
            "__typename": "PropertyAmenityValue",
            "id": 81
          },
          {
            "__typename": "PropertyAmenityValue",
            "id": 84
          },
          {
            "__typename": "PropertyAmenityValue",
            "id": 85
          }
        ],
        "neighborhoods": [
          {
            "__typename": "Neighborhood",
            "name": "Nha Trang",
            "regionId": "6054439"
          },
          {
            "__typename": "Neighborhood",
            "name": "Tran Phu Beach",
            "regionId": "553248633981709361"
          },
          {
            "__typename": "Neighborhood",
            "name": "Cam Lam",
            "regionId": "6182839"
          },
          {
            "__typename": "Neighborhood",
            "name": "Cam Ranh",
            "regionId": "6062879"
          },
          {
            "__typename": "Neighborhood",
            "name": "Ninh Hoa",
            "regionId": "6130860"
          },
          {
            "__typename": "Neighborhood",
            "name": "Ninh Van",
            "regionId": "6054315"
          },
          {
            "__typename": "Neighborhood",
            "name": "Dien Khanh",
            "regionId": "553248622945335509"
          },
          {
            "__typename": "Neighborhood",
            "name": "Dam Mon",
            "regionId": "6182815"
          },
          {
            "__typename": "Neighborhood",
            "name": "Đại Lãnh",
            "regionId": "3000002419"
          },
          {
            "__typename": "Neighborhood",
            "name": "Vĩnh Hải",
            "regionId": "3000002330"
          },
          {
            "__typename": "Neighborhood",
            "name": "Loc Tho",
            "regionId": "553248635950844810"
          },
          {
            "__typename": "Neighborhood",
            "name": "Vinh Phuoc",
            "regionId": "553248635934140183"
          },
          {
            "__typename": "Neighborhood",
            "name": "Van Ninh",
            "regionId": "6165559"
          },
          {
            "__typename": "Neighborhood",
            "name": "Phước Lộc",
            "regionId": "553248635976399837"
          },
          {
            "__typename": "Neighborhood",
            "name": "Ninh Phuoc",
            "regionId": "6141623"
          },
          {
            "__typename": "Neighborhood",
            "name": "Tân Lập",
            "regionId": "553248635976384387"
          },
          {
            "__typename": "Neighborhood",
            "name": "Phước Long",
            "regionId": "553248635976396533"
          },
          {
            "__typename": "Neighborhood",
            "name": "Khanh Son",
            "regionId": "553248635924014319"
          },
          {
            "__typename": "Neighborhood",
            "name": "Nha Trang (CXR-Cam Ranh)",
            "regionId": "6062877"
          },
          {
            "__typename": "Neighborhood",
            "name": "Nha Trang Station",
            "regionId": "6273492"
          }
        ],
        "priceRange": {
          "__typename": "PriceRange",
          "max": 148.83,
          "min": 100.69
        }
      },
      "universalSortAndFilter": {
        "__typename": "ShoppingSortAndFilters",
        "toolbar": {
          "__typename": "UIToolbar",
          "primary": "Sort & Filter",
          "actions": {
            "__typename": "UIToolbarActions",
            "primary": {
              "__typename": "UITertiaryButton",
              "primary": null,
              "action": {
                "__typename": "ShoppingSortAndFilterAction",
                "actionType": "CLOSE_AND_DO_NOT_APPLY",
                "accessibility": null,
                "analytics": {
                  "__typename": "ClientSideAnalytics",
                  "linkName": "close search filters dialog",
                  "referrerId": "HOT.SR.CloseFilterDialog.Close"
                }
              }
            },
            "secondaries": [
              {
                "__typename": "UITertiaryButton",
                "primary": "Clear",
                "disabled": false,
                "action": {
                  "__typename": "ShoppingSortAndFilterAction",
                  "actionType": "CLEAR_DATA",
                  "accessibility": "All selections now cleared",
                  "analytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "clear all selections",
                    "referrerId": "HOT.SR.ClearFilters"
                  }
                }
              }
            ]
          }
        },
        "revealAction": {
          "__typename": "UISecondaryFloatingActionButton",
          "primary": "Sort & Filter",
          "action": {
            "__typename": "ShoppingSortAndFilterAction",
            "actionType": "OPEN_MODAL",
            "accessibility": null,
            "analytics": {
              "__typename": "ClientSideAnalytics",
              "linkName": "Launch filters takeover",
              "referrerId": "HOT.SR:FilterControl"
            }
          },
          "accessibility": "2 filters applied. Change sort or apply more filters.",
          "badge": 2,
          "disabled": false,
          "icon": {
            "__typename": "Icon",
            "id": "tune",
            "description": "reveals sort and filter window",
            "size": null,
            "token": "icon__tune",
            "theme": null
          }
        },
        "applyAction": {
          "__typename": "UIPrimaryFloatingActionButton",
          "primary": "Done",
          "action": {
            "__typename": "ShoppingSortAndFilterAction",
            "actionType": "CLOSE_AND_APPLY",
            "accessibility": null,
            "analytics": {
              "__typename": "ClientSideAnalytics",
              "linkName": "done search filters dialog",
              "referrerId": "HOT.SR.FilterControlDone"
            }
          },
          "accessibility": "Apply and close Sort and Filter",
          "badge": null,
          "disabled": false,
          "icon": null
        },
        "filterSections": [
          {
            "__typename": "ShoppingSortAndFilterSection",
            "title": "Search by property name",
            "fields": [
              {
                "__typename": "ShoppingTextInputField",
                "primary": null,
                "secondary": null,
                "action": {
                  "__typename": "ShoppingSortAndFilterAction",
                  "actionType": "OPEN_MODAL",
                  "accessibility": null,
                  "analytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  }
                },
                "id": "hotelName",
                "label": null,
                "placeholder": "e.g. Marriott",
                "selected": null,
                "typeaheadInfo": {
                  "__typename": "TypeaheadInfo",
                  "client": "Hotels.Search",
                  "isDestination": true,
                  "lineOfBusiness": "hotels",
                  "maxNumberOfResults": 10,
                  "packageType": null,
                  "personalize": false,
                  "regionType": 128,
                  "typeaheadFeatures": "ta_hierarchy|postal_code|contextual_ta|consistent_display"
                },
                "icon": {
                  "__typename": "Icon",
                  "id": "search",
                  "description": "magnifying glass",
                  "size": null,
                  "token": "icon__search",
                  "theme": null
                },
                "analytics": {
                  "__typename": "ClientSideAnalytics",
                  "linkName": "hotelName.",
                  "referrerId": "HOT.SR.hotelName."
                }
              }
            ]
          },
          {
            "__typename": "ShoppingSortAndFilterSection",
            "title": "Filter by",
            "fields": [
              {
                "__typename": "ShoppingMultiSelectionField",
                "primary": "Popular filters",
                "secondary": null,
                "expando": {
                  "__typename": "ShoppingSelectionExpando",
                  "threshold": 5,
                  "collapseLabel": "See less",
                  "expandLabel": "See more",
                  "collapseAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  },
                  "expandAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  }
                },
                "multiSelectionOptions": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Pool",
                    "secondary": "",
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "POOL",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.POOL",
                      "referrerId": "HOT.SR.popularFilter.amenities.POOL.true:1"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.POOL",
                      "referrerId": "HOT.SR.popularFilter.amenities.POOL.false:1"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Ocean view",
                    "secondary": "",
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "OCEAN_VIEW",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.OCEAN_VIEW",
                      "referrerId": "HOT.SR.popularFilter.amenities.OCEAN_VIEW.true:2"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.OCEAN_VIEW",
                      "referrerId": "HOT.SR.popularFilter.amenities.OCEAN_VIEW.false:2"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "mealPlan",
                    "primary": "Breakfast included",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "FREE_BREAKFAST",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "mealPlan.FREE_BREAKFAST",
                      "referrerId": "HOT.SR.popularFilter.mealPlan.FREE_BREAKFAST.true:3"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "mealPlan.FREE_BREAKFAST",
                      "referrerId": "HOT.SR.popularFilter.mealPlan.FREE_BREAKFAST.false:3"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "lodging",
                    "primary": "Hotel resort",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "HOTEL_RESORT",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.HOTEL_RESORT",
                      "referrerId": "HOT.SR.popularFilter.lodging.HOTEL_RESORT.true:4"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.HOTEL_RESORT",
                      "referrerId": "HOT.SR.popularFilter.lodging.HOTEL_RESORT.false:4"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Nha Trang Night Market",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.239558,109.195917:6172088",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.239558,109.195917:6172088",
                      "referrerId": "HOT.SR.popularFilter.poi.12.239558,109.195917:6172088.true:5"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.239558,109.195917:6172088",
                      "referrerId": "HOT.SR.popularFilter.poi.12.239558,109.195917:6172088.false:5"
                    }
                  }
                ]
              },
              {
                "__typename": "ShoppingRangeField",
                "primary": "Your budget",
                "secondary": null,
                "range": {
                  "__typename": "ShoppingRangeFilterOption",
                  "id": "price",
                  "primary": "",
                  "secondary": null,
                  "icon": null,
                  "analytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "price.",
                    "referrerId": "HOT.SR.price."
                  },
                  "selected": {
                    "__typename": "RangeValue",
                    "id": "price",
                    "min": 100,
                    "max": 150
                  },
                  "characteristics": {
                    "__typename": "ShoppingRangeCharacteristics",
                    "min": 0,
                    "max": 300,
                    "step": 30,
                    "labels": [
                      {
                        "__typename": "ShoppingRangeLabel",
                        "label": "$0",
                        "value": 0
                      },
                      {
                        "__typename": "ShoppingRangeLabel",
                        "label": "$30",
                        "value": 30
                      },
                      {
                        "__typename": "ShoppingRangeLabel",
                        "label": "$60",
                        "value": 60
                      },
                      {
                        "__typename": "ShoppingRangeLabel",
                        "label": "$90",
                        "value": 90
                      },
                      {
                        "__typename": "ShoppingRangeLabel",
                        "label": "$120",
                        "value": 120
                      },
                      {
                        "__typename": "ShoppingRangeLabel",
                        "label": "$150",
                        "value": 150
                      },
                      {
                        "__typename": "ShoppingRangeLabel",
                        "label": "$180",
                        "value": 180
                      },
                      {
                        "__typename": "ShoppingRangeLabel",
                        "label": "$210",
                        "value": 210
                      },
                      {
                        "__typename": "ShoppingRangeLabel",
                        "label": "$240",
                        "value": 240
                      },
                      {
                        "__typename": "ShoppingRangeLabel",
                        "label": "$270",
                        "value": 270
                      },
                      {
                        "__typename": "ShoppingRangeLabel",
                        "label": "$300+",
                        "value": 300
                      }
                    ]
                  }
                }
              },
              {
                "__typename": "ShoppingSelectionField",
                "primary": "Guest rating",
                "secondary": null,
                "expando": {
                  "__typename": "ShoppingSelectionExpando",
                  "threshold": 5,
                  "collapseLabel": "See less",
                  "expandLabel": "See more",
                  "collapseAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  },
                  "expandAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  }
                },
                "options": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "guestRating",
                    "primary": "Any",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "",
                    "description": null,
                    "selected": true,
                    "disabled": false,
                    "default": true,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "guestRating.ANY",
                      "referrerId": "HOT.SR.guestRating.ANY.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "guestRating.ANY",
                      "referrerId": "HOT.SR.guestRating.ANY.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "guestRating",
                    "primary": "Wonderful 9+",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "45",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "guestRating.45",
                      "referrerId": "HOT.SR.guestRating.45.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "guestRating.45",
                      "referrerId": "HOT.SR.guestRating.45.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "guestRating",
                    "primary": "Very good 8+",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "40",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "guestRating.40",
                      "referrerId": "HOT.SR.guestRating.40.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "guestRating.40",
                      "referrerId": "HOT.SR.guestRating.40.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "guestRating",
                    "primary": "Good 7+",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "35",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "guestRating.35",
                      "referrerId": "HOT.SR.guestRating.35.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "guestRating.35",
                      "referrerId": "HOT.SR.guestRating.35.false"
                    }
                  }
                ]
              },
              {
                "__typename": "ShoppingMultiSelectionStackedTileField",
                "primary": "Star rating",
                "secondary": null,
                "tileMultiSelectionOptions": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "star",
                    "primary": "1",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "star",
                      "description": "star",
                      "size": null,
                      "token": "icon__star",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "10",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "star.10",
                      "referrerId": "HOT.SR.star.10.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "star.10",
                      "referrerId": "HOT.SR.star.10.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "star",
                    "primary": "2",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "star",
                      "description": "star",
                      "size": null,
                      "token": "icon__star",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "20",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "star.20",
                      "referrerId": "HOT.SR.star.20.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "star.20",
                      "referrerId": "HOT.SR.star.20.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "star",
                    "primary": "3",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "star",
                      "description": "star",
                      "size": null,
                      "token": "icon__star",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "30",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "star.30",
                      "referrerId": "HOT.SR.star.30.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "star.30",
                      "referrerId": "HOT.SR.star.30.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "star",
                    "primary": "4",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "star",
                      "description": "star",
                      "size": null,
                      "token": "icon__star",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "40",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "star.40",
                      "referrerId": "HOT.SR.star.40.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "star.40",
                      "referrerId": "HOT.SR.star.40.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "star",
                    "primary": "5",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "star",
                      "description": "star",
                      "size": null,
                      "token": "icon__star",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "50",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "star.50",
                      "referrerId": "HOT.SR.star.50.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "star.50",
                      "referrerId": "HOT.SR.star.50.false"
                    }
                  }
                ]
              },
              {
                "__typename": "ShoppingMultiSelectionField",
                "primary": "Payment type",
                "secondary": null,
                "expando": {
                  "__typename": "ShoppingSelectionExpando",
                  "threshold": 3,
                  "collapseLabel": "See less",
                  "expandLabel": "See more",
                  "collapseAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  },
                  "expandAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  }
                },
                "multiSelectionOptions": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "paymentType",
                    "primary": "Fully refundable",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "FREE_CANCELLATION",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "paymentType.FREE_CANCELLATION",
                      "referrerId": "HOT.SR.paymentType.FREE_CANCELLATION.true:1"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "paymentType.FREE_CANCELLATION",
                      "referrerId": "HOT.SR.paymentType.FREE_CANCELLATION.false:1"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "paymentType",
                    "primary": "Reserve now, pay later",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "PAY_LATER",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "paymentType.PAY_LATER",
                      "referrerId": "HOT.SR.paymentType.PAY_LATER.true:2"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "paymentType.PAY_LATER",
                      "referrerId": "HOT.SR.paymentType.PAY_LATER.false:2"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "paymentType",
                    "primary": "Pay with Hotels.com gift card",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "GIFT_CARD",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "paymentType.GIFT_CARD",
                      "referrerId": "HOT.SR.paymentType.GIFT_CARD.true:3"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "paymentType.GIFT_CARD",
                      "referrerId": "HOT.SR.paymentType.GIFT_CARD.false:3"
                    }
                  }
                ]
              },
              {
                "__typename": "ShoppingMultiSelectionField",
                "primary": "Property type",
                "secondary": null,
                "expando": {
                  "__typename": "ShoppingSelectionExpando",
                  "threshold": 3,
                  "collapseLabel": "See less",
                  "expandLabel": "See more",
                  "collapseAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  },
                  "expandAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  }
                },
                "multiSelectionOptions": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "lodging",
                    "primary": "Hotel resort",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "HOTEL_RESORT",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.HOTEL_RESORT",
                      "referrerId": "HOT.SR.lodging.HOTEL_RESORT.true:1"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.HOTEL_RESORT",
                      "referrerId": "HOT.SR.lodging.HOTEL_RESORT.false:1"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "lodging",
                    "primary": "Hotel",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "HOTEL",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.HOTEL",
                      "referrerId": "HOT.SR.lodging.HOTEL.true:2"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.HOTEL",
                      "referrerId": "HOT.SR.lodging.HOTEL.false:2"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "lodging",
                    "primary": "Villa",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "VILLA",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.VILLA",
                      "referrerId": "HOT.SR.lodging.VILLA.true:3"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.VILLA",
                      "referrerId": "HOT.SR.lodging.VILLA.false:3"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "lodging",
                    "primary": "Apartment",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "APARTMENT",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.APARTMENT",
                      "referrerId": "HOT.SR.lodging.APARTMENT.true:4"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.APARTMENT",
                      "referrerId": "HOT.SR.lodging.APARTMENT.false:4"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "lodging",
                    "primary": "Condo",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "CONDO",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.CONDO",
                      "referrerId": "HOT.SR.lodging.CONDO.true:5"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.CONDO",
                      "referrerId": "HOT.SR.lodging.CONDO.false:5"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "lodging",
                    "primary": "Apart-hotel",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "APART_HOTEL",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.APART_HOTEL",
                      "referrerId": "HOT.SR.lodging.APART_HOTEL.true:6"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.APART_HOTEL",
                      "referrerId": "HOT.SR.lodging.APART_HOTEL.false:6"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "lodging",
                    "primary": "House",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "VACATION_HOME",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.VACATION_HOME",
                      "referrerId": "HOT.SR.lodging.VACATION_HOME.true:7"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.VACATION_HOME",
                      "referrerId": "HOT.SR.lodging.VACATION_HOME.false:7"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "lodging",
                    "primary": "Ryokan",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "RYOKAN",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.RYOKAN",
                      "referrerId": "HOT.SR.lodging.RYOKAN.true:8"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "lodging.RYOKAN",
                      "referrerId": "HOT.SR.lodging.RYOKAN.false:8"
                    }
                  }
                ]
              },
              {
                "__typename": "ShoppingMultiSelectionStackedTileField",
                "primary": "Vacation rental bedrooms",
                "secondary": null,
                "tileMultiSelectionOptions": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "bedroomFilter",
                    "primary": "Studio",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "0",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "bedroomFilter.0",
                      "referrerId": "HOT.SR.bedroomFilter.0.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "bedroomFilter.0",
                      "referrerId": "HOT.SR.bedroomFilter.0.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "bedroomFilter",
                    "primary": "1",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "1",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "bedroomFilter.1",
                      "referrerId": "HOT.SR.bedroomFilter.1.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "bedroomFilter.1",
                      "referrerId": "HOT.SR.bedroomFilter.1.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "bedroomFilter",
                    "primary": "2",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "2",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "bedroomFilter.2",
                      "referrerId": "HOT.SR.bedroomFilter.2.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "bedroomFilter.2",
                      "referrerId": "HOT.SR.bedroomFilter.2.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "bedroomFilter",
                    "primary": "3",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "3",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "bedroomFilter.3",
                      "referrerId": "HOT.SR.bedroomFilter.3.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "bedroomFilter.3",
                      "referrerId": "HOT.SR.bedroomFilter.3.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "bedroomFilter",
                    "primary": "4+",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "4",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "bedroomFilter.4",
                      "referrerId": "HOT.SR.bedroomFilter.4.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "bedroomFilter.4",
                      "referrerId": "HOT.SR.bedroomFilter.4.false"
                    }
                  }
                ]
              },
              {
                "__typename": "ShoppingSelectionField",
                "primary": "Neighborhood",
                "secondary": null,
                "expando": {
                  "__typename": "ShoppingSelectionExpando",
                  "threshold": 3,
                  "collapseLabel": "See less",
                  "expandLabel": "See more",
                  "collapseAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  },
                  "expandAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  }
                },
                "options": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Nha Trang",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "6054439",
                    "description": null,
                    "selected": true,
                    "disabled": false,
                    "default": true,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6054439",
                      "referrerId": "HOT.SR.regionId.6054439.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6054439",
                      "referrerId": "HOT.SR.regionId.6054439.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Loc Tho",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "553248635950844810",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248635950844810",
                      "referrerId": "HOT.SR.regionId.553248635950844810.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248635950844810",
                      "referrerId": "HOT.SR.regionId.553248635950844810.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Tran Phu Beach",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "553248633981709361",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248633981709361",
                      "referrerId": "HOT.SR.regionId.553248633981709361.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248633981709361",
                      "referrerId": "HOT.SR.regionId.553248633981709361.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Cam Ranh",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "6062879",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6062879",
                      "referrerId": "HOT.SR.regionId.6062879.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6062879",
                      "referrerId": "HOT.SR.regionId.6062879.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Phước Lộc",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "553248635976399837",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248635976399837",
                      "referrerId": "HOT.SR.regionId.553248635976399837.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248635976399837",
                      "referrerId": "HOT.SR.regionId.553248635976399837.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Dien Khanh",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "553248622945335509",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248622945335509",
                      "referrerId": "HOT.SR.regionId.553248622945335509.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248622945335509",
                      "referrerId": "HOT.SR.regionId.553248622945335509.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Vĩnh Hải",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "3000002330",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.3000002330",
                      "referrerId": "HOT.SR.regionId.3000002330.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.3000002330",
                      "referrerId": "HOT.SR.regionId.3000002330.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Phước Long",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "553248635976396533",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248635976396533",
                      "referrerId": "HOT.SR.regionId.553248635976396533.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248635976396533",
                      "referrerId": "HOT.SR.regionId.553248635976396533.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Khanh Son",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "553248635924014319",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248635924014319",
                      "referrerId": "HOT.SR.regionId.553248635924014319.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248635924014319",
                      "referrerId": "HOT.SR.regionId.553248635924014319.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Nha Trang Station",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "6273492",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6273492",
                      "referrerId": "HOT.SR.regionId.6273492.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6273492",
                      "referrerId": "HOT.SR.regionId.6273492.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Ninh Van",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "6054315",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6054315",
                      "referrerId": "HOT.SR.regionId.6054315.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6054315",
                      "referrerId": "HOT.SR.regionId.6054315.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Đại Lãnh",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "3000002419",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.3000002419",
                      "referrerId": "HOT.SR.regionId.3000002419.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.3000002419",
                      "referrerId": "HOT.SR.regionId.3000002419.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Ninh Phuoc",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "6141623",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6141623",
                      "referrerId": "HOT.SR.regionId.6141623.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6141623",
                      "referrerId": "HOT.SR.regionId.6141623.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Tân Lập",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "553248635976384387",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248635976384387",
                      "referrerId": "HOT.SR.regionId.553248635976384387.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248635976384387",
                      "referrerId": "HOT.SR.regionId.553248635976384387.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Vinh Phuoc",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "553248635934140183",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248635934140183",
                      "referrerId": "HOT.SR.regionId.553248635934140183.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.553248635934140183",
                      "referrerId": "HOT.SR.regionId.553248635934140183.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Dam Mon",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "6182815",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6182815",
                      "referrerId": "HOT.SR.regionId.6182815.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6182815",
                      "referrerId": "HOT.SR.regionId.6182815.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Nha Trang (CXR-Cam Ranh)",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "6062877",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6062877",
                      "referrerId": "HOT.SR.regionId.6062877.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6062877",
                      "referrerId": "HOT.SR.regionId.6062877.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Van Ninh",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "6165559",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6165559",
                      "referrerId": "HOT.SR.regionId.6165559.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6165559",
                      "referrerId": "HOT.SR.regionId.6165559.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Cam Lam",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "6182839",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6182839",
                      "referrerId": "HOT.SR.regionId.6182839.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6182839",
                      "referrerId": "HOT.SR.regionId.6182839.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "regionId",
                    "primary": "Ninh Hoa",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "6130860",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6130860",
                      "referrerId": "HOT.SR.regionId.6130860.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "regionId.6130860",
                      "referrerId": "HOT.SR.regionId.6130860.false"
                    }
                  }
                ]
              },
              {
                "__typename": "ShoppingSelectionField",
                "primary": "Popular locations",
                "secondary": null,
                "expando": {
                  "__typename": "ShoppingSelectionExpando",
                  "threshold": 3,
                  "collapseLabel": "See less",
                  "expandLabel": "See more",
                  "collapseAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  },
                  "expandAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  }
                },
                "options": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Any",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "",
                    "description": null,
                    "selected": true,
                    "disabled": false,
                    "default": true,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.ANY",
                      "referrerId": "HOT.SR.poi.ANY.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.ANY",
                      "referrerId": "HOT.SR.poi.ANY.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Nha Trang Night Market",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.239558,109.195917:6172088",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.239558,109.195917:6172088",
                      "referrerId": "HOT.SR.poi.12.239558,109.195917:6172088.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.239558,109.195917:6172088",
                      "referrerId": "HOT.SR.poi.12.239558,109.195917:6172088.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Nha Trang Port",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.205889,109.216543:6147624",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.205889,109.216543:6147624",
                      "referrerId": "HOT.SR.poi.12.205889,109.216543:6147624.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.205889,109.216543:6147624",
                      "referrerId": "HOT.SR.poi.12.205889,109.216543:6147624.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Vinpearl Cable Car",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.201821,109.214857:6182837",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.201821,109.214857:6182837",
                      "referrerId": "HOT.SR.poi.12.201821,109.214857:6182837.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.201821,109.214857:6182837",
                      "referrerId": "HOT.SR.poi.12.201821,109.214857:6182837.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Dam Market",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.25441,109.19221:6158140",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.25441,109.19221:6158140",
                      "referrerId": "HOT.SR.poi.12.25441,109.19221:6158140.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.25441,109.19221:6158140",
                      "referrerId": "HOT.SR.poi.12.25441,109.19221:6158140.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Vinpearl Beach",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.222606,109.247973:6115844",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.222606,109.247973:6115844",
                      "referrerId": "HOT.SR.poi.12.222606,109.247973:6115844.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.222606,109.247973:6115844",
                      "referrerId": "HOT.SR.poi.12.222606,109.247973:6115844.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Bai Duong Beach",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.276442,109.202541:6183082",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.276442,109.202541:6183082",
                      "referrerId": "HOT.SR.poi.12.276442,109.202541:6183082.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.276442,109.202541:6183082",
                      "referrerId": "HOT.SR.poi.12.276442,109.202541:6183082.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Louisiane Brewhouse",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.231339,109.198611:6182835",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.231339,109.198611:6182835",
                      "referrerId": "HOT.SR.poi.12.231339,109.198611:6182835.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.231339,109.198611:6182835",
                      "referrerId": "HOT.SR.poi.12.231339,109.198611:6182835.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Long Son Pagoda",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.252036,109.180901:6115840",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.252036,109.180901:6115840",
                      "referrerId": "HOT.SR.poi.12.252036,109.180901:6115840.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.252036,109.180901:6115840",
                      "referrerId": "HOT.SR.poi.12.252036,109.180901:6115840.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "I-Resort Nha Trang",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.271415,109.174843:553248635962295342",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.271415,109.174843:553248635962295342",
                      "referrerId": "HOT.SR.poi.12.271415,109.174843:553248635962295342.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.271415,109.174843:553248635962295342",
                      "referrerId": "HOT.SR.poi.12.271415,109.174843:553248635962295342.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Po Nagar Cham Towers",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.265329,109.195286:6115842",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.265329,109.195286:6115842",
                      "referrerId": "HOT.SR.poi.12.265329,109.195286:6115842.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.265329,109.195286:6115842",
                      "referrerId": "HOT.SR.poi.12.265329,109.195286:6115842.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Husband Rock",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.272061,109.205716:6170015",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.272061,109.205716:6170015",
                      "referrerId": "HOT.SR.poi.12.272061,109.205716:6170015.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.272061,109.205716:6170015",
                      "referrerId": "HOT.SR.poi.12.272061,109.205716:6170015.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Thap Ba Hot Spring Center",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.270071,109.177797:6172074",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.270071,109.177797:6172074",
                      "referrerId": "HOT.SR.poi.12.270071,109.177797:6172074.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.270071,109.177797:6172074",
                      "referrerId": "HOT.SR.poi.12.270071,109.177797:6172074.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Tram Huong Tower",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.240558,109.19687:6182825",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.240558,109.19687:6182825",
                      "referrerId": "HOT.SR.poi.12.240558,109.19687:6182825.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.240558,109.19687:6182825",
                      "referrerId": "HOT.SR.poi.12.240558,109.19687:6182825.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Vincom Plaza Le Thanh Ton",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.243301,109.193525:553248634766219589",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.243301,109.193525:553248634766219589",
                      "referrerId": "HOT.SR.poi.12.243301,109.193525:553248634766219589.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.243301,109.193525:553248634766219589",
                      "referrerId": "HOT.SR.poi.12.243301,109.193525:553248634766219589.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Hon Mun Island",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.166145,109.30248:553248621562620074",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.166145,109.30248:553248621562620074",
                      "referrerId": "HOT.SR.poi.12.166145,109.30248:553248621562620074.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.166145,109.30248:553248621562620074",
                      "referrerId": "HOT.SR.poi.12.166145,109.30248:553248621562620074.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Hon Chong Promontory",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.27291,109.206474:553248621526918229",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.27291,109.206474:553248621526918229",
                      "referrerId": "HOT.SR.poi.12.27291,109.206474:553248621526918229.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.27291,109.206474:553248621526918229",
                      "referrerId": "HOT.SR.poi.12.27291,109.206474:553248621526918229.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Hon Mieu Island",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.190829,109.22517:553248621562620071",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.190829,109.22517:553248621562620071",
                      "referrerId": "HOT.SR.poi.12.190829,109.22517:553248621562620071.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.190829,109.22517:553248621562620071",
                      "referrerId": "HOT.SR.poi.12.190829,109.22517:553248621562620071.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Diamond Bay Golf Course",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.172952,109.191278:6182821",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.172952,109.191278:6182821",
                      "referrerId": "HOT.SR.poi.12.172952,109.191278:6182821.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.172952,109.191278:6182821",
                      "referrerId": "HOT.SR.poi.12.172952,109.191278:6182821.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Nha Trang Cathedral",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.246804,109.188086:6182823",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.246804,109.188086:6182823",
                      "referrerId": "HOT.SR.poi.12.246804,109.188086:6182823.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.246804,109.188086:6182823",
                      "referrerId": "HOT.SR.poi.12.246804,109.188086:6182823.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "poi",
                    "primary": "Khanh Hoa Museum",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "12.249748,109.196111:6182829",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.249748,109.196111:6182829",
                      "referrerId": "HOT.SR.poi.12.249748,109.196111:6182829.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "poi.12.249748,109.196111:6182829",
                      "referrerId": "HOT.SR.poi.12.249748,109.196111:6182829.false"
                    }
                  }
                ]
              },
              {
                "__typename": "ShoppingMultiSelectionField",
                "primary": "Meal plans available",
                "secondary": null,
                "expando": {
                  "__typename": "ShoppingSelectionExpando",
                  "threshold": 3,
                  "collapseLabel": "See less",
                  "expandLabel": "See more",
                  "collapseAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  },
                  "expandAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  }
                },
                "multiSelectionOptions": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "mealPlan",
                    "primary": "Breakfast included",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "FREE_BREAKFAST",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "mealPlan.FREE_BREAKFAST",
                      "referrerId": "HOT.SR.mealPlan.FREE_BREAKFAST.true:1"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "mealPlan.FREE_BREAKFAST",
                      "referrerId": "HOT.SR.mealPlan.FREE_BREAKFAST.false:1"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "mealPlan",
                    "primary": "Lunch included",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "HALF_BOARD",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "mealPlan.HALF_BOARD",
                      "referrerId": "HOT.SR.mealPlan.HALF_BOARD.true:2"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "mealPlan.HALF_BOARD",
                      "referrerId": "HOT.SR.mealPlan.HALF_BOARD.false:2"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "mealPlan",
                    "primary": "Dinner included",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "FULL_BOARD",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "mealPlan.FULL_BOARD",
                      "referrerId": "HOT.SR.mealPlan.FULL_BOARD.true:3"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "mealPlan.FULL_BOARD",
                      "referrerId": "HOT.SR.mealPlan.FULL_BOARD.false:3"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "mealPlan",
                    "primary": "All inclusive",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "ALL_INCLUSIVE",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "mealPlan.ALL_INCLUSIVE",
                      "referrerId": "HOT.SR.mealPlan.ALL_INCLUSIVE.true:4"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "mealPlan.ALL_INCLUSIVE",
                      "referrerId": "HOT.SR.mealPlan.ALL_INCLUSIVE.false:4"
                    }
                  }
                ]
              },
              {
                "__typename": "ShoppingMultiSelectionTileField",
                "primary": "Amenities",
                "secondary": null,
                "tileMultiSelectionOptions": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Pool",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "pool",
                      "description": "",
                      "size": null,
                      "token": "pool",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "POOL",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.POOL",
                      "referrerId": "HOT.SR.amenities.POOL.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.POOL",
                      "referrerId": "HOT.SR.amenities.POOL.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Ocean view",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "water",
                      "description": "",
                      "size": null,
                      "token": "water",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "OCEAN_VIEW",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.OCEAN_VIEW",
                      "referrerId": "HOT.SR.amenities.OCEAN_VIEW.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.OCEAN_VIEW",
                      "referrerId": "HOT.SR.amenities.OCEAN_VIEW.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Kitchen",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "kitchen",
                      "description": "",
                      "size": null,
                      "token": "kitchen",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "KITCHEN_KITCHENETTE",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.KITCHEN_KITCHENETTE",
                      "referrerId": "HOT.SR.amenities.KITCHEN_KITCHENETTE.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.KITCHEN_KITCHENETTE",
                      "referrerId": "HOT.SR.amenities.KITCHEN_KITCHENETTE.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "WiFi included",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "wifi",
                      "description": "",
                      "size": null,
                      "token": "wifi",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "WIFI",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.WIFI",
                      "referrerId": "HOT.SR.amenities.WIFI.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.WIFI",
                      "referrerId": "HOT.SR.amenities.WIFI.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Pet friendly",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "pets",
                      "description": "",
                      "size": null,
                      "token": "pets",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "PETS",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.PETS",
                      "referrerId": "HOT.SR.amenities.PETS.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.PETS",
                      "referrerId": "HOT.SR.amenities.PETS.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Air conditioned",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "ac_unit",
                      "description": "",
                      "size": null,
                      "token": "ac_unit",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "AIR_CONDITIONING",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.AIR_CONDITIONING",
                      "referrerId": "HOT.SR.amenities.AIR_CONDITIONING.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.AIR_CONDITIONING",
                      "referrerId": "HOT.SR.amenities.AIR_CONDITIONING.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Spa",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "spa",
                      "description": "",
                      "size": null,
                      "token": "spa",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "SPA_ON_SITE",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.SPA_ON_SITE",
                      "referrerId": "HOT.SR.amenities.SPA_ON_SITE.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.SPA_ON_SITE",
                      "referrerId": "HOT.SR.amenities.SPA_ON_SITE.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Parking",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "local_parking",
                      "description": "",
                      "size": null,
                      "token": "local_parking",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "PARKING",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.PARKING",
                      "referrerId": "HOT.SR.amenities.PARKING.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.PARKING",
                      "referrerId": "HOT.SR.amenities.PARKING.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Gym",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "fitness_center",
                      "description": "",
                      "size": null,
                      "token": "fitness_center",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "GYM",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.GYM",
                      "referrerId": "HOT.SR.amenities.GYM.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.GYM",
                      "referrerId": "HOT.SR.amenities.GYM.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Outdoor space",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "balcony",
                      "description": "",
                      "size": null,
                      "token": "balcony",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "BALCONY_OR_TERRACE",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.BALCONY_OR_TERRACE",
                      "referrerId": "HOT.SR.amenities.BALCONY_OR_TERRACE.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.BALCONY_OR_TERRACE",
                      "referrerId": "HOT.SR.amenities.BALCONY_OR_TERRACE.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Casino",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "casino",
                      "description": "",
                      "size": null,
                      "token": "casino",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "CASINO",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.CASINO",
                      "referrerId": "HOT.SR.amenities.CASINO.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.CASINO",
                      "referrerId": "HOT.SR.amenities.CASINO.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Restaurant",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "local_dining",
                      "description": "",
                      "size": null,
                      "token": "local_dining",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "RESTAURANT_IN_HOTEL",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.RESTAURANT_IN_HOTEL",
                      "referrerId": "HOT.SR.amenities.RESTAURANT_IN_HOTEL.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.RESTAURANT_IN_HOTEL",
                      "referrerId": "HOT.SR.amenities.RESTAURANT_IN_HOTEL.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Electric car charging station",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "check",
                      "description": "",
                      "size": null,
                      "token": "check",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "ELECTRIC_CAR",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.ELECTRIC_CAR",
                      "referrerId": "HOT.SR.amenities.ELECTRIC_CAR.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.ELECTRIC_CAR",
                      "referrerId": "HOT.SR.amenities.ELECTRIC_CAR.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Hot tub",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "hot_tub",
                      "description": "",
                      "size": null,
                      "token": "hot_tub",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "HOT_TUB",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.HOT_TUB",
                      "referrerId": "HOT.SR.amenities.HOT_TUB.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.HOT_TUB",
                      "referrerId": "HOT.SR.amenities.HOT_TUB.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Cribs",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "bedding__crib",
                      "description": "",
                      "size": null,
                      "token": "bedding__crib",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "CRIB",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.CRIB",
                      "referrerId": "HOT.SR.amenities.CRIB.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.CRIB",
                      "referrerId": "HOT.SR.amenities.CRIB.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Water park",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "check",
                      "description": "",
                      "size": null,
                      "token": "check",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "WATER_PARK",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.WATER_PARK",
                      "referrerId": "HOT.SR.amenities.WATER_PARK.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.WATER_PARK",
                      "referrerId": "HOT.SR.amenities.WATER_PARK.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Airport shuttle included",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "airport_shuttle",
                      "description": "",
                      "size": null,
                      "token": "airport_shuttle",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "FREE_AIRPORT_TRANSPORTATION",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.FREE_AIRPORT_TRANSPORTATION",
                      "referrerId": "HOT.SR.amenities.FREE_AIRPORT_TRANSPORTATION.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.FREE_AIRPORT_TRANSPORTATION",
                      "referrerId": "HOT.SR.amenities.FREE_AIRPORT_TRANSPORTATION.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "amenities",
                    "primary": "Washer and dryer",
                    "secondary": "",
                    "icon": {
                      "__typename": "Icon",
                      "id": "local_laundry_service",
                      "description": "",
                      "size": null,
                      "token": "local_laundry_service",
                      "theme": null
                    },
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "WASHER_DRYER",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.WASHER_DRYER",
                      "referrerId": "HOT.SR.amenities.WASHER_DRYER.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "amenities.WASHER_DRYER",
                      "referrerId": "HOT.SR.amenities.WASHER_DRYER.false"
                    }
                  }
                ]
              },
              {
                "__typename": "ShoppingMultiSelectionField",
                "primary": "Hotels.com® Rewards",
                "secondary": null,
                "expando": {
                  "__typename": "ShoppingSelectionExpando",
                  "threshold": 3,
                  "collapseLabel": "See less",
                  "expandLabel": "See more",
                  "collapseAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  },
                  "expandAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  }
                },
                "multiSelectionOptions": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "rewards",
                    "primary": "Redeem reward nights",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "REDEEM_REWARD_NIGHTS",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "rewards.REDEEM_REWARD_NIGHTS",
                      "referrerId": "HOT.SR.rewards.REDEEM_REWARD_NIGHTS.true:1"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "rewards.REDEEM_REWARD_NIGHTS",
                      "referrerId": "HOT.SR.rewards.REDEEM_REWARD_NIGHTS.false:1"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "rewards",
                    "primary": "VIP Access properties for superior stays",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "VIP",
                    "description": "Plus extra benefits for Silver and Gold members",
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "rewards.VIP",
                      "referrerId": "HOT.SR.rewards.VIP.true:2"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "rewards.VIP",
                      "referrerId": "HOT.SR.rewards.VIP.false:2"
                    }
                  }
                ]
              },
              {
                "__typename": "ShoppingMultiSelectionField",
                "primary": "Accessibility",
                "secondary": null,
                "expando": {
                  "__typename": "ShoppingSelectionExpando",
                  "threshold": 3,
                  "collapseLabel": "See less",
                  "expandLabel": "See more",
                  "collapseAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  },
                  "expandAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  }
                },
                "multiSelectionOptions": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "accessibility",
                    "primary": "Sign language-capable staff",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "SIGN_LANGUAGE_INTERPRETER",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.SIGN_LANGUAGE_INTERPRETER",
                      "referrerId": "HOT.SR.accessibility.SIGN_LANGUAGE_INTERPRETER.true:1"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.SIGN_LANGUAGE_INTERPRETER",
                      "referrerId": "HOT.SR.accessibility.SIGN_LANGUAGE_INTERPRETER.false:1"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "accessibility",
                    "primary": "Wheelchair-accessible parking",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "ACCESSIBLE_PARKING",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.ACCESSIBLE_PARKING",
                      "referrerId": "HOT.SR.accessibility.ACCESSIBLE_PARKING.true:2"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.ACCESSIBLE_PARKING",
                      "referrerId": "HOT.SR.accessibility.ACCESSIBLE_PARKING.false:2"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "accessibility",
                    "primary": "In-room accessibility",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "IN_ROOM_ACCESSIBLE",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.IN_ROOM_ACCESSIBLE",
                      "referrerId": "HOT.SR.accessibility.IN_ROOM_ACCESSIBLE.true:3"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.IN_ROOM_ACCESSIBLE",
                      "referrerId": "HOT.SR.accessibility.IN_ROOM_ACCESSIBLE.false:3"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "accessibility",
                    "primary": "Elevator",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "ELEVATOR",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.ELEVATOR",
                      "referrerId": "HOT.SR.accessibility.ELEVATOR.true:4"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.ELEVATOR",
                      "referrerId": "HOT.SR.accessibility.ELEVATOR.false:4"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "accessibility",
                    "primary": "Accessible bathroom",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "ACCESSIBLE_BATHROOM",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.ACCESSIBLE_BATHROOM",
                      "referrerId": "HOT.SR.accessibility.ACCESSIBLE_BATHROOM.true:5"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.ACCESSIBLE_BATHROOM",
                      "referrerId": "HOT.SR.accessibility.ACCESSIBLE_BATHROOM.false:5"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "accessibility",
                    "primary": "Stair-free path to entrance",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "STAIR_FREE_PATH",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.STAIR_FREE_PATH",
                      "referrerId": "HOT.SR.accessibility.STAIR_FREE_PATH.true:6"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.STAIR_FREE_PATH",
                      "referrerId": "HOT.SR.accessibility.STAIR_FREE_PATH.false:6"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "accessibility",
                    "primary": "Service animals allowed",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "SERVICE_ANIMAL",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.SERVICE_ANIMAL",
                      "referrerId": "HOT.SR.accessibility.SERVICE_ANIMAL.true:7"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.SERVICE_ANIMAL",
                      "referrerId": "HOT.SR.accessibility.SERVICE_ANIMAL.false:7"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "accessibility",
                    "primary": "Roll-in shower",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "ROLL_IN_SHOWER",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.ROLL_IN_SHOWER",
                      "referrerId": "HOT.SR.accessibility.ROLL_IN_SHOWER.true:8"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "accessibility.ROLL_IN_SHOWER",
                      "referrerId": "HOT.SR.accessibility.ROLL_IN_SHOWER.false:8"
                    }
                  }
                ]
              },
              {
                "__typename": "ShoppingMultiSelectionField",
                "primary": "Traveler experience",
                "secondary": null,
                "expando": {
                  "__typename": "ShoppingSelectionExpando",
                  "threshold": 3,
                  "collapseLabel": "See less",
                  "expandLabel": "See more",
                  "collapseAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  },
                  "expandAnalytics": {
                    "__typename": "ClientSideAnalytics",
                    "linkName": "",
                    "referrerId": ""
                  }
                },
                "multiSelectionOptions": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "travelerType",
                    "primary": "LGBTQ welcoming",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "LGBT",
                    "description": "See properties that pledge to make all guests feel safe, welcome, and respected.",
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "travelerType.LGBT",
                      "referrerId": "HOT.SR.travelerType.LGBT.true:1"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "travelerType.LGBT",
                      "referrerId": "HOT.SR.travelerType.LGBT.false:1"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "travelerType",
                    "primary": "Business friendly",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "BUSINESS",
                    "description": "See properties with amenities to help you work comfortably, like WiFi and breakfast.",
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "travelerType.BUSINESS",
                      "referrerId": "HOT.SR.travelerType.BUSINESS.true:2"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "travelerType.BUSINESS",
                      "referrerId": "HOT.SR.travelerType.BUSINESS.false:2"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "travelerType",
                    "primary": "Family friendly",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "FAMILY",
                    "description": "See properties that include family essentials like in-room conveniences and activities for the kids.",
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "travelerType.FAMILY",
                      "referrerId": "HOT.SR.travelerType.FAMILY.true:3"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "travelerType.FAMILY",
                      "referrerId": "HOT.SR.travelerType.FAMILY.false:3"
                    }
                  }
                ]
              },
              {
                "__typename": "ShoppingMultiSelectionField",
                "primary": "Availability",
                "secondary": null,
                "expando": null,
                "multiSelectionOptions": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "availableFilter",
                    "primary": "Only show available properties",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "SHOW_AVAILABLE_ONLY",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "availableFilter.SHOW_AVAILABLE_ONLY",
                      "referrerId": "HOT.SR.availableFilter.SHOW_AVAILABLE_ONLY.true:1"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "availableFilter.SHOW_AVAILABLE_ONLY",
                      "referrerId": "HOT.SR.availableFilter.SHOW_AVAILABLE_ONLY.false:1"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "sortSections": [
          {
            "__typename": "ShoppingSortAndFilterSection",
            "title": null,
            "fields": [
              {
                "__typename": "ShoppingDropdownField",
                "primary": "Sort by",
                "secondary": null,
                "dropdownFilterOptions": [
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "sort",
                    "primary": "Recommended",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "RECOMMENDED",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": true,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "sort.RECOMMENDED",
                      "referrerId": "HOT.SR.sort.RECOMMENDED.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "sort.RECOMMENDED",
                      "referrerId": "HOT.SR.sort.RECOMMENDED.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "sort",
                    "primary": "Price",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "PRICE_LOW_TO_HIGH",
                    "description": null,
                    "selected": true,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "sort.PRICE_LOW_TO_HIGH",
                      "referrerId": "HOT.SR.sort.PRICE_LOW_TO_HIGH.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "sort.PRICE_LOW_TO_HIGH",
                      "referrerId": "HOT.SR.sort.PRICE_LOW_TO_HIGH.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "sort",
                    "primary": "Distance from downtown",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "DISTANCE",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "sort.DISTANCE",
                      "referrerId": "HOT.SR.sort.DISTANCE.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "sort.DISTANCE",
                      "referrerId": "HOT.SR.sort.DISTANCE.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "sort",
                    "primary": "Guest rating",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "REVIEW",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "sort.REVIEW",
                      "referrerId": "HOT.SR.sort.REVIEW.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "sort.REVIEW",
                      "referrerId": "HOT.SR.sort.REVIEW.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "sort",
                    "primary": "Price + our picks",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "PRICE_RELEVANT",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "sort.PRICE_RELEVANT",
                      "referrerId": "HOT.SR.sort.PRICE_RELEVANT.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "sort.PRICE_RELEVANT",
                      "referrerId": "HOT.SR.sort.PRICE_RELEVANT.false"
                    }
                  },
                  {
                    "__typename": "ShoppingSelectableFilterOption",
                    "id": "sort",
                    "primary": "Star rating",
                    "secondary": null,
                    "icon": null,
                    "analytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "",
                      "referrerId": ""
                    },
                    "value": "PROPERTY_CLASS",
                    "description": null,
                    "selected": false,
                    "disabled": false,
                    "default": false,
                    "selectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "sort.PROPERTY_CLASS",
                      "referrerId": "HOT.SR.sort.PROPERTY_CLASS.true"
                    },
                    "deselectAnalytics": {
                      "__typename": "ClientSideAnalytics",
                      "linkName": "sort.PROPERTY_CLASS",
                      "referrerId": "HOT.SR.sort.PROPERTY_CLASS.false"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "properties": [
        {
          "__typename": "Property",
          "id": "44128751",
          "featuredMessages": [],
          "name": "Selectum Noa Resort Cam Ranh",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": null
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/45000000/44130000/44128800/44128751/98ca719d.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 11.35
            },
            "distanceFromMessaging": null,
            "regionId": "6182839"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$101",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.085271,
              "longitude": 109.190839
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Cam Lam"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Member Price",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "29% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 141.82,
                  "formatted": "$142"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$101"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 100.69,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$101"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 141.82,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$142"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$142",
                      "accessibilityLabel": "The price was $142"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$101",
                      "accessibilityLabel": "The price is $101"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$812 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 8,
            "total": 1
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6182839",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Member’s price: 23%"
            },
            "totalDiscountPercentage": 29
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "27514918",
          "featuredMessages": [],
          "name": "Ta'or Seaview Homestay",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/28000000/27520000/27515000/27514918/87cc6cf2.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 1.79
            },
            "distanceFromMessaging": null,
            "regionId": "553248635934140183"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$105",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.271866,
              "longitude": 109.20411
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Vinh Phuoc"
          },
          "offerBadge": null,
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": null,
                "disclaimer": null,
                "formattedDisplayPrice": "$105"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 105.45,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$105"
            },
            "strikeOut": null,
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$105",
                      "accessibilityLabel": "The price is $105"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$609 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 0,
            "total": 0
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "553248635934140183",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": null,
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": null
            },
            "totalDiscountPercentage": 0
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "2540761",
          "featuredMessages": [],
          "name": "MerPerle Hon Tam Resort",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/3000000/2550000/2540800/2540761/7481b1b9.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 5.87
            },
            "distanceFromMessaging": null,
            "regionId": "6054439"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$113",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.178097,
              "longitude": 109.237653
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Nha Trang"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Member Price",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "68% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 352.69,
                  "formatted": "$353"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$113"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 112.86,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$113"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 352.69,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$353"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$353",
                      "accessibilityLabel": "The price was $353"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$113",
                      "accessibilityLabel": "The price is $113"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$652 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 8.2,
            "total": 168
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6054439",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Member’s price: 68%"
            },
            "totalDiscountPercentage": 68
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "33331379",
          "featuredMessages": [],
          "name": "Vesna Hotel",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Lobby",
              "url": "https://images.trvl-media.com/lodging/34000000/33340000/33331400/33331379/1f9a2925.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 10001
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 1.75
            },
            "distanceFromMessaging": null,
            "regionId": "6054439"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$118",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.226066,
              "longitude": 109.20044
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Tran Phu Beach"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Member Price",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "50% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 236.36,
                  "formatted": "$236"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$118"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 118.18,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$118"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 236.36,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$236"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$236",
                      "accessibilityLabel": "The price was $236"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$118",
                      "accessibilityLabel": "The price is $118"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$683 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 6.8,
            "total": 5
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6054439",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Member’s price: 50%"
            },
            "totalDiscountPercentage": 50
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "22991728",
          "featuredMessages": [],
          "name": "Boton Blue Hotel & Spa",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Lobby",
              "url": "https://images.trvl-media.com/lodging/23000000/23000000/22991800/22991728/3d623bd1.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 10001
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 2.56
            },
            "distanceFromMessaging": null,
            "regionId": "6054439"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$120",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.2844,
              "longitude": 109.20371
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Nha Trang"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "VIP Access",
              "theme_temp": "VIP",
              "icon_temp": null,
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "70% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Reserve without credit card",
                "theme": "SUCCESS",
                "type": "NO_CREDIT_CARD",
                "mark": null
              },
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": [
              {
                "__typename": "OfferAttribute",
                "type": "NO_CC_REQUIRED"
              },
              {
                "__typename": "OfferAttribute",
                "type": "VIP"
              },
              {
                "__typename": "OfferAttribute",
                "type": "PAYMENT_CHOICE"
              }
            ]
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 400.00002,
                  "formatted": "$400"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$120"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 120.000006,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$120"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 400.00002,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$400"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$400",
                      "accessibilityLabel": "The price was $400"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$120",
                      "accessibilityLabel": "The price is $120"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$693 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 8.6,
            "total": 235
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6054439",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Member’s price: 70%"
            },
            "totalDiscountPercentage": 70
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "33833196",
          "featuredMessages": [],
          "name": "Truong Hotel",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/34000000/33840000/33833200/33833196/5f7cd7f9.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 1.92
            },
            "distanceFromMessaging": null,
            "regionId": "3000002330"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$124",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.275154,
              "longitude": 109.20198
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Vĩnh Hải"
          },
          "offerBadge": null,
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": null,
                "disclaimer": null,
                "formattedDisplayPrice": "$124"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 123.64,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$124"
            },
            "strikeOut": null,
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$124",
                      "accessibilityLabel": "The price is $124"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$737 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 0,
            "total": 0
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "3000002330",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": null,
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": null
            },
            "totalDiscountPercentage": 0
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "45773013",
          "featuredMessages": [],
          "name": "Alma Resort Cam Ranh",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": null
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/46000000/45780000/45773100/45773013/492e9c9a.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 12.23
            },
            "distanceFromMessaging": null,
            "regionId": "6182839"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$126",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.072606,
              "longitude": 109.194807
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Cam Lam"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Great for families",
              "theme_temp": "FAMILY_FRIENDLY",
              "icon_temp": {
                "__typename": "Icon",
                "id": "family_friendly",
                "description": "family_friendly"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "20% off",
              "theme_temp": "DEAL_GENERIC",
              "icon_temp": null,
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 157.09,
                  "formatted": "$157"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$126"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 125.67,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$126"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 157.09,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$157"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$157",
                      "accessibilityLabel": "The price was $157"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$126",
                      "accessibilityLabel": "The price is $126"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$726 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 8.8,
            "total": 22
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6182839",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "REGULAR",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Book early and save 20%"
            },
            "totalDiscountPercentage": 20
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "45982055",
          "featuredMessages": [],
          "name": "Alpha Bird Nha Trang",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/46000000/45990000/45982100/45982055/aa587adf.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 1.32
            },
            "distanceFromMessaging": null,
            "regionId": "553248635950844810"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$131",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.231177,
              "longitude": 109.196135
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Tran Phu Beach"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Member Price",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "10% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 145.45,
                  "formatted": "$145"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$131"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 130.9,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$131"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 145.45,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$145"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$145",
                      "accessibilityLabel": "The price was $145"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$131",
                      "accessibilityLabel": "The price is $131"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$756 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 0,
            "total": 0
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "553248635950844810",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Private sale: save 10%"
            },
            "totalDiscountPercentage": 10
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "4757569",
          "featuredMessages": [],
          "name": "Whale Island Resort",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 2
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/5000000/4760000/4757600/4757569/fdecba1e.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 31.06
            },
            "distanceFromMessaging": null,
            "regionId": "6165559"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$133",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.652493,
              "longitude": 109.395062
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Van Ninh"
          },
          "offerBadge": null,
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": null,
                "disclaimer": null,
                "formattedDisplayPrice": "$133"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 132.94,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$133"
            },
            "strikeOut": null,
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$133",
                      "accessibilityLabel": "The price is $133"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$768 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 8,
            "total": 27
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6165559",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": null,
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": null
            },
            "totalDiscountPercentage": 0
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "8751594",
          "featuredMessages": [],
          "name": "The Costa Nha Trang Residences",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 4
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Interior entrance",
              "url": "https://images.trvl-media.com/lodging/9000000/8760000/8751600/8751594/fff35b05.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 10000
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 0.5
            },
            "distanceFromMessaging": null,
            "regionId": "553248635950844810"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$137",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.244713,
              "longitude": 109.196266
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Tran Phu Beach"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Member Price",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "20% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Reserve without credit card",
                "theme": "SUCCESS",
                "type": "NO_CREDIT_CARD",
                "mark": null
              },
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": [
              {
                "__typename": "OfferAttribute",
                "type": "NO_CC_REQUIRED"
              },
              {
                "__typename": "OfferAttribute",
                "type": "PAYMENT_CHOICE"
              }
            ]
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 171.41817,
                  "formatted": "$171"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$137"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 137.134553,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$137"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 171.41817,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$171"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$171",
                      "accessibilityLabel": "The price was $171"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$137",
                      "accessibilityLabel": "The price is $137"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$792 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 8,
            "total": 132
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "553248635950844810",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Member’s price: 20%"
            },
            "totalDiscountPercentage": 20
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "18907213",
          "featuredMessages": [],
          "name": "D26 Nha Trang Hotel",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/19000000/18910000/18907300/18907213/42d297d6.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 1.41
            },
            "distanceFromMessaging": null,
            "regionId": "553248635950844810"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$138",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.230416,
              "longitude": 109.197866
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Tran Phu Beach"
          },
          "offerBadge": null,
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": null,
                "disclaimer": null,
                "formattedDisplayPrice": "$138"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 138.18,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$138"
            },
            "strikeOut": null,
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$138",
                      "accessibilityLabel": "The price is $138"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$897 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 7,
            "total": 2
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "553248635950844810",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": null,
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": null
            },
            "totalDiscountPercentage": 0
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "19527132",
          "featuredMessages": [],
          "name": "Aquatic Ocean Hotel",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 2
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/20000000/19530000/19527200/19527132/393a453a.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 1.06
            },
            "distanceFromMessaging": null,
            "regionId": "553248635950844810"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$145",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.235376,
              "longitude": 109.196656
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Tran Phu Beach"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Great for families",
              "theme_temp": "FAMILY_FRIENDLY",
              "icon_temp": {
                "__typename": "Icon",
                "id": "family_friendly",
                "description": "family_friendly"
              },
              "mark": null
            },
            "secondary": null
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": null,
                "disclaimer": null,
                "formattedDisplayPrice": "$145"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 145.45,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$145"
            },
            "strikeOut": null,
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$145",
                      "accessibilityLabel": "The price is $145"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$840 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 7,
            "total": 2
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "553248635950844810",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": null,
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": null
            },
            "totalDiscountPercentage": 0
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "76386576",
          "featuredMessages": [],
          "name": "Wyndham Garden Cam Ranh Resort",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": null
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/77000000/76390000/76386600/76386576/0c7b284d.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 15.2
            },
            "distanceFromMessaging": null,
            "regionId": "6182839"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$149",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.030639,
              "longitude": 109.213
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Cam Lam"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Member Price",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "24% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Reserve now, pay later",
                "theme": "SUCCESS",
                "type": "PAY_LATER",
                "mark": null
              },
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": [
              {
                "__typename": "OfferAttribute",
                "type": "PAYMENT_CHOICE"
              }
            ]
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 194.55,
                  "formatted": "$195"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$149"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 148.83,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$149"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 194.55,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$195"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$195",
                      "accessibilityLabel": "The price was $195"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$149",
                      "accessibilityLabel": "The price is $149"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$859 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 9,
            "total": 2
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6182839",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Member’s price: 24%"
            },
            "totalDiscountPercentage": 24
          },
          "saveTripItem": null
        }
      ],
      "propertySearchListings": [
        {
          "__typename": "LodgingCard"
        },
        {
          "__typename": "LodgingCard"
        },
        {
          "__typename": "LodgingCard"
        },
        {
          "__typename": "LodgingCard"
        },
        {
          "__typename": "LodgingCard"
        },
        {
          "__typename": "LodgingCard"
        },
        {
          "__typename": "LodgingCard"
        },
        {
          "__typename": "LodgingCard"
        },
        {
          "__typename": "LodgingCard"
        },
        {
          "__typename": "LodgingCard"
        },
        {
          "__typename": "LodgingCard"
        },
        {
          "__typename": "LodgingCard"
        },
        {
          "__typename": "LodgingCard"
        },
        {
          "__typename": "Property",
          "id": "44128751",
          "featuredMessages": [],
          "name": "Selectum Noa Resort Cam Ranh",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": null
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/45000000/44130000/44128800/44128751/98ca719d.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 11.35
            },
            "distanceFromMessaging": null,
            "regionId": "6182839"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$101",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.085271,
              "longitude": 109.190839
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Cam Lam"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Member Price",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "29% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 141.82,
                  "formatted": "$142"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$101"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 100.69,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$101"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 141.82,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$142"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$142",
                      "accessibilityLabel": "The price was $142"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$101",
                      "accessibilityLabel": "The price is $101"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$812 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 8,
            "total": 1
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6182839",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Member’s price: 23%"
            },
            "totalDiscountPercentage": 29
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "27514918",
          "featuredMessages": [],
          "name": "Ta'or Seaview Homestay",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/28000000/27520000/27515000/27514918/87cc6cf2.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 1.79
            },
            "distanceFromMessaging": null,
            "regionId": "553248635934140183"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$105",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.271866,
              "longitude": 109.20411
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Vinh Phuoc"
          },
          "offerBadge": null,
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": null,
                "disclaimer": null,
                "formattedDisplayPrice": "$105"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 105.45,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$105"
            },
            "strikeOut": null,
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$105",
                      "accessibilityLabel": "The price is $105"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$609 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 0,
            "total": 0
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "553248635934140183",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": null,
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": null
            },
            "totalDiscountPercentage": 0
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "2540761",
          "featuredMessages": [],
          "name": "MerPerle Hon Tam Resort",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/3000000/2550000/2540800/2540761/7481b1b9.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 5.87
            },
            "distanceFromMessaging": null,
            "regionId": "6054439"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$113",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.178097,
              "longitude": 109.237653
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Nha Trang"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Member Price",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "68% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 352.69,
                  "formatted": "$353"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$113"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 112.86,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$113"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 352.69,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$353"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$353",
                      "accessibilityLabel": "The price was $353"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$113",
                      "accessibilityLabel": "The price is $113"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$652 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 8.2,
            "total": 168
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6054439",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Member’s price: 68%"
            },
            "totalDiscountPercentage": 68
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "33331379",
          "featuredMessages": [],
          "name": "Vesna Hotel",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Lobby",
              "url": "https://images.trvl-media.com/lodging/34000000/33340000/33331400/33331379/1f9a2925.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 10001
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 1.75
            },
            "distanceFromMessaging": null,
            "regionId": "6054439"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$118",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.226066,
              "longitude": 109.20044
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Tran Phu Beach"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Member Price",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "50% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 236.36,
                  "formatted": "$236"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$118"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 118.18,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$118"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 236.36,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$236"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$236",
                      "accessibilityLabel": "The price was $236"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$118",
                      "accessibilityLabel": "The price is $118"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$683 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 6.8,
            "total": 5
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6054439",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Member’s price: 50%"
            },
            "totalDiscountPercentage": 50
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "22991728",
          "featuredMessages": [],
          "name": "Boton Blue Hotel & Spa",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Lobby",
              "url": "https://images.trvl-media.com/lodging/23000000/23000000/22991800/22991728/3d623bd1.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 10001
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 2.56
            },
            "distanceFromMessaging": null,
            "regionId": "6054439"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$120",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.2844,
              "longitude": 109.20371
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Nha Trang"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "VIP Access",
              "theme_temp": "VIP",
              "icon_temp": null,
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "70% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Reserve without credit card",
                "theme": "SUCCESS",
                "type": "NO_CREDIT_CARD",
                "mark": null
              },
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": [
              {
                "__typename": "OfferAttribute",
                "type": "NO_CC_REQUIRED"
              },
              {
                "__typename": "OfferAttribute",
                "type": "VIP"
              },
              {
                "__typename": "OfferAttribute",
                "type": "PAYMENT_CHOICE"
              }
            ]
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 400.00002,
                  "formatted": "$400"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$120"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 120.000006,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$120"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 400.00002,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$400"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$400",
                      "accessibilityLabel": "The price was $400"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$120",
                      "accessibilityLabel": "The price is $120"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$693 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 8.6,
            "total": 235
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6054439",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Member’s price: 70%"
            },
            "totalDiscountPercentage": 70
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "33833196",
          "featuredMessages": [],
          "name": "Truong Hotel",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/34000000/33840000/33833200/33833196/5f7cd7f9.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 1.92
            },
            "distanceFromMessaging": null,
            "regionId": "3000002330"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$124",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.275154,
              "longitude": 109.20198
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Vĩnh Hải"
          },
          "offerBadge": null,
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": null,
                "disclaimer": null,
                "formattedDisplayPrice": "$124"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 123.64,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$124"
            },
            "strikeOut": null,
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$124",
                      "accessibilityLabel": "The price is $124"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$737 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 0,
            "total": 0
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "3000002330",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": null,
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": null
            },
            "totalDiscountPercentage": 0
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "45773013",
          "featuredMessages": [],
          "name": "Alma Resort Cam Ranh",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": null
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/46000000/45780000/45773100/45773013/492e9c9a.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 12.23
            },
            "distanceFromMessaging": null,
            "regionId": "6182839"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$126",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.072606,
              "longitude": 109.194807
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Cam Lam"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Great for families",
              "theme_temp": "FAMILY_FRIENDLY",
              "icon_temp": {
                "__typename": "Icon",
                "id": "family_friendly",
                "description": "family_friendly"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "20% off",
              "theme_temp": "DEAL_GENERIC",
              "icon_temp": null,
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 157.09,
                  "formatted": "$157"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$126"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 125.67,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$126"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 157.09,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$157"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$157",
                      "accessibilityLabel": "The price was $157"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$126",
                      "accessibilityLabel": "The price is $126"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$726 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 8.8,
            "total": 22
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6182839",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "REGULAR",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Book early and save 20%"
            },
            "totalDiscountPercentage": 20
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "45982055",
          "featuredMessages": [],
          "name": "Alpha Bird Nha Trang",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/46000000/45990000/45982100/45982055/aa587adf.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 1.32
            },
            "distanceFromMessaging": null,
            "regionId": "553248635950844810"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$131",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.231177,
              "longitude": 109.196135
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Tran Phu Beach"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Member Price",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "10% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 145.45,
                  "formatted": "$145"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$131"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 130.9,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$131"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 145.45,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$145"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$145",
                      "accessibilityLabel": "The price was $145"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$131",
                      "accessibilityLabel": "The price is $131"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$756 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 0,
            "total": 0
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "553248635950844810",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Private sale: save 10%"
            },
            "totalDiscountPercentage": 10
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "4757569",
          "featuredMessages": [],
          "name": "Whale Island Resort",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 2
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/5000000/4760000/4757600/4757569/fdecba1e.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 31.06
            },
            "distanceFromMessaging": null,
            "regionId": "6165559"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$133",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.652493,
              "longitude": 109.395062
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Van Ninh"
          },
          "offerBadge": null,
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": null,
                "disclaimer": null,
                "formattedDisplayPrice": "$133"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 132.94,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$133"
            },
            "strikeOut": null,
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$133",
                      "accessibilityLabel": "The price is $133"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$768 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 8,
            "total": 27
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6165559",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": null,
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": null
            },
            "totalDiscountPercentage": 0
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "8751594",
          "featuredMessages": [],
          "name": "The Costa Nha Trang Residences",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 4
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Interior entrance",
              "url": "https://images.trvl-media.com/lodging/9000000/8760000/8751600/8751594/fff35b05.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 10000
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 0.5
            },
            "distanceFromMessaging": null,
            "regionId": "553248635950844810"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$137",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.244713,
              "longitude": 109.196266
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Tran Phu Beach"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Member Price",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "20% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Reserve without credit card",
                "theme": "SUCCESS",
                "type": "NO_CREDIT_CARD",
                "mark": null
              },
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": [
              {
                "__typename": "OfferAttribute",
                "type": "NO_CC_REQUIRED"
              },
              {
                "__typename": "OfferAttribute",
                "type": "PAYMENT_CHOICE"
              }
            ]
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 171.41817,
                  "formatted": "$171"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$137"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 137.134553,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$137"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 171.41817,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$171"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$171",
                      "accessibilityLabel": "The price was $171"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$137",
                      "accessibilityLabel": "The price is $137"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$792 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 8,
            "total": 132
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "553248635950844810",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Member’s price: 20%"
            },
            "totalDiscountPercentage": 20
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "18907213",
          "featuredMessages": [],
          "name": "D26 Nha Trang Hotel",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 1
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/19000000/18910000/18907300/18907213/42d297d6.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 1.41
            },
            "distanceFromMessaging": null,
            "regionId": "553248635950844810"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$138",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.230416,
              "longitude": 109.197866
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Tran Phu Beach"
          },
          "offerBadge": null,
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": null,
                "disclaimer": null,
                "formattedDisplayPrice": "$138"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 138.18,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$138"
            },
            "strikeOut": null,
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$138",
                      "accessibilityLabel": "The price is $138"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$897 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 7,
            "total": 2
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "553248635950844810",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": null,
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": null
            },
            "totalDiscountPercentage": 0
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "19527132",
          "featuredMessages": [],
          "name": "Aquatic Ocean Hotel",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": 2
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/20000000/19530000/19527200/19527132/393a453a.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 1.06
            },
            "distanceFromMessaging": null,
            "regionId": "553248635950844810"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$145",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.235376,
              "longitude": 109.196656
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Tran Phu Beach"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Great for families",
              "theme_temp": "FAMILY_FRIENDLY",
              "icon_temp": {
                "__typename": "Icon",
                "id": "family_friendly",
                "description": "family_friendly"
              },
              "mark": null
            },
            "secondary": null
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": []
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": null,
                "disclaimer": null,
                "formattedDisplayPrice": "$145"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 145.45,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$145"
            },
            "strikeOut": null,
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$145",
                      "accessibilityLabel": "The price is $145"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$840 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 7,
            "total": 2
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "553248635950844810",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": null,
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": null
            },
            "totalDiscountPercentage": 0
          },
          "saveTripItem": null
        },
        {
          "__typename": "Property",
          "id": "76386576",
          "featuredMessages": [],
          "name": "Wyndham Garden Cam Ranh Resort",
          "availability": {
            "__typename": "PropertyAvailability",
            "available": true,
            "minRoomsLeft": null
          },
          "propertyImage": {
            "__typename": "PropertyImage",
            "alt": "",
            "fallbackImage": null,
            "image": {
              "__typename": "Image",
              "description": "Primary image",
              "url": "https://images.trvl-media.com/lodging/77000000/76390000/76386600/76386576/0c7b284d.jpg?impolicy=resizecrop&rw=455&ra=fit"
            },
            "subjectId": 3
          },
          "destinationInfo": {
            "__typename": "PropertyDestinationInfo",
            "distanceFromDestination": {
              "__typename": "Distance",
              "unit": "MILE",
              "value": 15.2
            },
            "distanceFromMessaging": null,
            "regionId": "6182839"
          },
          "legalDisclaimer": null,
          "listingFooter": null,
          "mapMarker": {
            "__typename": "MapMarker",
            "label": "$149",
            "latLong": {
              "__typename": "Coordinates",
              "latitude": 12.030639,
              "longitude": 109.213
            }
          },
          "neighborhood": {
            "__typename": "Region",
            "name": "Cam Lam"
          },
          "offerBadge": {
            "__typename": "OfferBadge",
            "primary": {
              "__typename": "Badge",
              "text": "Member Price",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            },
            "secondary": {
              "__typename": "Badge",
              "text": "24% off",
              "theme_temp": "DEAL_MEMBER",
              "icon_temp": {
                "__typename": "Icon",
                "id": "mod",
                "description": "mod"
              },
              "mark": null
            }
          },
          "offerSummary": {
            "__typename": "OfferSummary",
            "messages": [
              {
                "__typename": "OfferSummaryMessage",
                "message": "Reserve now, pay later",
                "theme": "SUCCESS",
                "type": "PAY_LATER",
                "mark": null
              },
              {
                "__typename": "OfferSummaryMessage",
                "message": "Collect stamps",
                "theme": null,
                "type": "LOYALTY_EARN",
                "mark": {
                  "__typename": "Mark",
                  "id": "loyalty",
                  "token": "mark__loyalty",
                  "description": "loyalty logo"
                }
              }
            ],
            "attributes": [
              {
                "__typename": "OfferAttribute",
                "type": "PAYMENT_CHOICE"
              }
            ]
          },
          "pinnedDetails": null,
          "price": {
            "__typename": "PropertyPrice",
            "options": [
              {
                "__typename": "PropertyPriceOption",
                "strikeOut": {
                  "__typename": "Money",
                  "amount": 194.55,
                  "formatted": "$195"
                },
                "disclaimer": {
                  "__typename": "LodgingPlainMessage",
                  "value": "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                },
                "formattedDisplayPrice": "$149"
              }
            ],
            "priceMessaging": null,
            "lead": {
              "__typename": "Money",
              "amount": 148.83,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$149"
            },
            "strikeOut": {
              "__typename": "Money",
              "amount": 194.55,
              "currencyInfo": {
                "__typename": "Currency",
                "code": "USD",
                "symbol": "$"
              },
              "formatted": "$195"
            },
            "displayMessages": [
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": {
                      "__typename": "LodgingPlainDialog",
                      "content": [
                        "Standard rate on our site, provided by the property and based on your search, before all discounts and rewards applied."
                      ],
                      "title": null
                    },
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$195",
                      "accessibilityLabel": "The price was $195"
                    },
                    "role": "STRIKEOUT"
                  },
                  {
                    "__typename": "DisplayPrice",
                    "disclaimer": null,
                    "price": {
                      "__typename": "FormattedMoney",
                      "formatted": "$149",
                      "accessibilityLabel": "The price is $149"
                    },
                    "role": "LEAD"
                  }
                ]
              },
              {
                "__typename": "PriceDisplayMessage",
                "lineItems": [
                  {
                    "__typename": "LodgingEnrichedMessage",
                    "accessibilityLabel": null,
                    "mark": null,
                    "state": null,
                    "value": "$859 total",
                    "badge": null
                  }
                ]
              }
            ],
            "strikeOutType": "STANDALONE",
            "priceMessages": [
              {
                "__typename": "LodgingPlainMessage",
                "value": "per night"
              }
            ]
          },
          "priceAfterLoyaltyPointsApplied": {
            "__typename": "PropertyPrice",
            "options": [],
            "lead": null
          },
          "propertyFees": [],
          "reviews": {
            "__typename": "PropertyReviewsSummary",
            "score": 9,
            "total": 2
          },
          "sponsoredListing": null,
          "star": null,
          "supportingMessages": null,
          "regionId": "6182839",
          "priceMetadata": {
            "__typename": "PropertyPriceMetadata",
            "discountType": "MEMBER_DEAL",
            "rateDiscount": {
              "__typename": "RateDiscount",
              "description": "Member’s price: 24%"
            },
            "totalDiscountPercentage": 24
          },
          "saveTripItem": null
        }
      ],
      "summary": {
        "__typename": "PropertyResultsSummary",
        "matchedPropertiesSize": 883,
        "pricingScheme": {
          "__typename": "PricingScheme",
          "type": "DAILY_RATE"
        },
        "regionCompression": null,
        "loyaltyInfo": {
          "__typename": "PropertyLoyaltyDiscount",
          "saveWithPointsMessage": null,
          "saveWithPointsActionMessage": null
        },
        "resultsTitleModel": {
          "__typename": "ResultTitleModel",
          "header": "883 properties"
        },
        "resultsSummary": [
          {
            "__typename": "LodgingPlainMessage"
          },
          {
            "__typename": "LodgingLinkMessage",
            "accessibilityLabel": "Opens in a new window",
            "value": "What we are paid impacts our sort order",
            "link": {
              "__typename": "LodgingLink",
              "clientSideAnalytics": {
                "__typename": "ClientSideAnalytics",
                "linkName": "Sort disclaimer",
                "referrerId": "HOT.HSR.RecommendedSort.FAQlink"
              },
              "uri": {
                "__typename": "HttpURI",
                "value": "https://service.hotels.com/en-us/#/article/19645"
              }
            }
          }
        ]
      },
      "searchCriteria": {
        "__typename": "SearchCriteria",
        "resolvedDateRange": {
          "__typename": "PropertyDateRange",
          "checkInDate": {
            "__typename": "Date",
            "day": 13,
            "month": 2,
            "year": 2023
          },
          "checkOutDate": {
            "__typename": "Date",
            "day": 18,
            "month": 2,
            "year": 2023
          }
        }
      },
      "shoppingContext": {
        "__typename": "ShoppingContext",
        "multiItem": null
      },
      "map": {
        "__typename": "PropertySearchMap",
        "subtitle": null
      },
      "clickstream": {
        "__typename": "SearchClickstreamEvents",
        "searchResultsViewed": null
      }
    }
  }
}
