import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'asset-change-tracking-br': {
                        table: 'sys_script'
                        id: '1330ec4cffbc47c2a388b318e9b11f2a'
                    }
                    'asset-validation-br': {
                        table: 'sys_script'
                        id: '9148f882b30d47c582bfaa6eb3cc16bf'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '4b5ffad1541640dfbed56a17855b808a'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'a462826f6dbe4714851afcf999ddce00'
                    }
                    'src_server_asset-validation_js': {
                        table: 'sys_module'
                        id: '6835e07411014e74beb54597fb4765da'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '03a63ac714a64d61b191f3439107fa18'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_type'
                            value: 'phone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05e20ffe95534a3faf53cb017f1f75b5'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'is_critical'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '0985e4e3071b4364a89454483b77ee34'
                        key: {
                            application_file: 'c25587c80af24b3aae80d911ed8b96ae'
                            source_artifact: '7e40f906eeba4f1cb34668dd60f9e095'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '112dcc37e41547a1847619c3cae1c1b1'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_tag'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1195f414475a4acbb2b80cbd6ac43b17'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'model'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '13ac8c8631764cf289731377a5214b94'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '167be993f1594fdd9116daa1ecaebac9'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '16ffe220db924877b846b23c7f8d0ab9'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'status'
                            value: 'maintenance'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '183e497761aa45dd889ce6b8bb203d29'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'serial_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '1db2cd6943494a52ba823854c0da3ae7'
                        key: {
                            name: 'x_640383_asset_tra/main.js.map'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '217011f32e0f4ccdbcd116a369ddc3b4'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_tag'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '256c5bb7663946a18d85205861e726e9'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2619e185c9a746b5a75886140fb3b76e'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e96bf39fd694741b6fb08392cd2aac5'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'warranty_expiry'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3066a915e8654536a0388451f048bb83'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'condition_rating'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3b9e1d3180ab4c6993279ff4a3f2667f'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_type'
                            value: 'computer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '407e8eec925c425d9d484c5f05eb0928'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'status'
                            value: 'inactive'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '434ea7ccbc0d457a85816e62761a205f'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4bd97470e57445c7b268b68f09e77951'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_type'
                            value: 'furniture'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e00a85261a943ebb34d63324ceaea3e'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'condition_rating'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '510d49fdb3ce4eb3b6e03d71d51fa4b6'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '511944c839d64b65b6434d21e24e8acf'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5b0f45244cf64da784cf8af7cb200788'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'status'
                            value: 'retired'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5bc8b851d04e47b7a82d0a18370e18a3'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_type'
                            value: 'equipment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5bf2e9015cff4138a69c534ef4f9cffe'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'warranty_expiry'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '5e94f518f10e4a3ba9949b622489f39b'
                        key: {
                            application_file: '1db2cd6943494a52ba823854c0da3ae7'
                            source_artifact: '7e40f906eeba4f1cb34668dd60f9e095'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5f59553a3ea64a1b9b005bb00d4455e2'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_type'
                            value: 'monitor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5fbe4bc68b7240f488ca26a753565eb1'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'serial_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '60ede137766446d69339c2bc47ca0cde'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '621b209a586f495dae73dbee453e9ff8'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6af6e69ff0044bc9b99eef02e968fed8'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b0f69eafa204576bbb27431d97435e1'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6cfdc753175041a38c0c16cbb8aaf0c2'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '7e40f906eeba4f1cb34668dd60f9e095'
                        key: {
                            name: 'x_640383_asset_tra_dashboard.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '80b12408857140009495b92738f11696'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '812ca2243c044121932052f679823fa6'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '86c33ac4e34e458f999a3fb7dbd50e7b'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'status'
                            value: 'missing'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '889123859fbc4c1c8c1df94f15904adb'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '89c480e47ebf4c14bd43bef42b910531'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8ad29d5b68184af6946202ba0599334f'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '921721bea91e468f927f554a05810ebb'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a21fc8cb9bdc4adc9ce8aba87ae817e8'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6dc40efa72740c59ade4a441d216b6d'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'purchase_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ade2a85675534577b7d83dd3932cffca'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'purchase_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b38b987fccb9464bbe25040a33a3e675'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b741b2d4847741bdace5a46f5574eecd'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'is_critical'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: 'c25587c80af24b3aae80d911ed8b96ae'
                        key: {
                            endpoint: 'x_640383_asset_tra_dashboard.do'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c4bb8d7458bd47a3a24dc5c1ca2d28c5'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_type'
                            value: 'laptop'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c549224bc0a940628c2315aaba9838b5'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_type'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'cb59786e0eb4428a97fb8944efaaef9a'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cc9af51045a44497a38a3526a0a32f8a'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'd0a7039ae13b46c89048ae999add57ca'
                        key: {
                            name: 'x_640383_asset_tra/main'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd45705bff8944adda10d1e56b41eeb9c'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'claude_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e21e822420dd4000ada08c10644947ff'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'asset_type'
                            value: 'printer'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'e2d5d6cdcf3442848568230d9a8be99c'
                        key: {
                            application_file: 'd0a7039ae13b46c89048ae999add57ca'
                            source_artifact: '7e40f906eeba4f1cb34668dd60f9e095'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'edc664e70d0c4ebda16635e1c0f9392a'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'claude_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef492e5ad1544bfaa2aa94b656c003f0'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'purchase_cost'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f3cb5d8266d8401ca5b0505c134afacc'
                        key: {
                            name: 'x_640383_asset_tra_asset'
                            element: 'purchase_cost'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
