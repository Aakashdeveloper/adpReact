 framemanager = ALProxy("ALFrameManager")
        folderName = os.path.join(framemanager.getBehaviorPath(self.behaviorId), "../lib")
        if folderName not in sys.path:
            sys.path.append(folderName)
        import speech_recognition as sr
        #####################################################################
        self.logger.info("function called")
        gNode = 'root'
        #time.sleep(2)
        while 1:
                #for index, name in enumerate(sr.Microphone.list_microphone_names()):
                    #print("Microphone with name \"{1}\" found for 'Microphone(device_index={0})'".format(index, name))

                r = sr.Recognizer()
                with sr.Microphone() as source:
                    self.logger.info("Say something!")
                    #r.adjust_for_ambient_noise(source)
                    #print("checked minimum energy threshold to {}".format(r.energy_threshold))
                    self.logger.info("Say something!")
                    audio = r.listen(source)
                    self.logger.info("Listen Complete!")

                # Speech recognition using Google Speech Recognition
                data = ""
                try:
                    data = r.recognize_google(audio)
                    self.logger.info("You said: " + str(data))
                    #Start watson code here
                    ######################################################################################
                    final = 25
                    self.logger.info("Shown P Value***************: " + data)
                    self.logger.info("Shown Old Value*************: " + gNode)
                    url = 'https://gateway.watsonplatform.net/conversation/api/v1/workspaces/69ca8fae-494d-44dd-9e0a-86c6b44126ff/message?version=2017-07-17'
                    auth = 'Basic ' + base64.encodestring('%s:%s' % ('1d23e7b4-f5da-4d11-b009-99d151e7116b','rw0TvLHNcrVM'))[:-1]
                    content_header = {
                                         'Authorization': auth,
                                         'Content-Type':'application/json',
                                         'Accept':'application/json'
                                     }
                    values = {"input": {"text": data}, "context": {"system": {"dialog_stack":[{"dialog_node":gNode}]}}}
                    req = urllib2.Request(url,data=json.dumps(values),headers=content_header)
                    req.get_method = lambda: 'POST'
                    result = urllib2.urlopen(req).read()
                    json_data = json.loads(result)
                    temp = str(json_data['output']['text'])
                    #global gNode
                    gNode = str(json_data['context']['system']['dialog_stack'][0]['dialog_node'])
                    #print(json_data)
                    self.logger.info("Dialog Node: "+ gNode)
                    self.logger.info("SpeechToText: "+ temp)

                    #Ending watson code
                    #####################################################################################
                except sr.UnknownValueError:
                    self.logger.info("Google Speech Recognition Error")
                except sr.RequestError as e:
                    self.logger.infoprint("Could not request Error; {0}".format(e))

                #print(str(data))
                ttsProxy = ALProxy("ALTextToSpeech")
                ttsProxy.say(str(data))